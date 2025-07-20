import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';

// Google Drive credentials from service account
const serviceAccount = require('../../service-account.json');

// Configure formidable to handle file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

async function uploadToGoogleDrive(file: formidable.File) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: serviceAccount,
      scopes: ['https://www.googleapis.com/auth/drive.file'],
    });

    const driveService = google.drive({
      version: 'v3',
      auth,
    });

    const response = await driveService.files.create({
      requestBody: {
        name: file.originalFilename,
        mimeType: file.mimetype,
        parents: [GOOGLE_DRIVE_FOLDER_ID!],
      },
      media: {
        mimeType: file.mimetype,
        body: fs.createReadStream(file.filepath),
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error uploading to Google Drive:', error);
    throw error;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const form = formidable({ multiples: true });
    
    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve([fields, files]);
      });
    });

    const uploadedFiles = Array.isArray(files.file) ? files.file : [files.file];
    const fileUrls = [];

    for (const file of uploadedFiles) {
      const driveFile = await uploadToGoogleDrive(file);
      // Create a sharable link
      const shareResponse = await google.drive({ version: 'v3', auth }).files.create({
        requestBody: {
          name: file.originalFilename,
          parents: ['1-KboZghxwrLmULyoUQvD9O8OvFrg7X-l'], // Your shared Google Drive folder ID
        },
        media: {
          mimeType: file.mimetype,
          body: fs.createReadStream(file.filepath),
        },
        fields: 'id, webViewLink',
      });
      
      fileUrls.push(shareResponse.data.webViewLink);
    }

    // Clean up temporary files
    for (const file of uploadedFiles) {
      fs.unlinkSync(file.filepath);
    }

    res.status(200).json({ urls: fileUrls });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Upload failed' });
  }
}
