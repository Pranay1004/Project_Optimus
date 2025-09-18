import React, { useState } from 'react';
import { FileUploaderMinimal } from '@uploadcare/react-uploader';
import '@uploadcare/react-uploader/core.css';
import { MessageSquare, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    otherService: '',
    message: ''
  });
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: null, message: '' });

    const emailData = {
      '_subject': '🏗️ New Project Inquiry - Optimus Projects',
      '_template': 'table',
      '_captcha': false,
      'Client Name': `${formData.firstName} ${formData.lastName}`,
      'Email Address': formData.email,
      'Phone Number': formData.phone,
      'Service Required': formData.service === 'Others' ? `Others: ${formData.otherService}` : formData.service,
      'Project Details': formData.message,
      'Uploaded Files': uploadedFiles.length > 0 ? 
        uploadedFiles.map((fileData, index) => {
          const [fileName, fileUrl] = fileData.split(': ');
          return `${index + 1}. ${fileName} - ${fileUrl}`;
        }).join('\n') : 'No files uploaded',
      'File Count': uploadedFiles.length.toString(),
      'Inquiry Date': new Date().toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      'Inquiry Time': new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }),
      'Source': 'Project Optimus Website Contact Form'
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/mukesh244@pm.me', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(emailData)
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: 'success',
          message: 'Thank you for your message. We will get back to you soon!'
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          otherService: '',
          message: ''
        });
        setUploadedFiles([]);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: err instanceof Error ? err.message : 'Failed to submit form'
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-pearl-white via-glass-white to-silk-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-saffron to-gold rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-gold to-saffron rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          {/* Post a Query button commented out
          <button
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-saffron to-gold border-2 border-orange-400 rounded-full px-8 py-3 mb-6 shadow-md font-display font-bold text-xl text-silk-white transition-all duration-300 hover:scale-105 hover:shadow-gold-glow focus:outline-none"
            style={{ fontSize: '1.25rem', padding: '0.75rem 2rem' }}
          >
            <span className="text-xl">💬</span>
            <span>Post a Query</span>
          </button>
          */}
          <h2 className="text-5xl md:text-6xl font-display font-bold text-onyx mb-2 tracking-tight">
            Ready to Start <span className="block bg-premium-gradient bg-clip-text text-transparent">Your Project?</span>
          </h2>
          <p className="text-lg text-charcoal-noir max-w-3xl mx-auto font-body leading-relaxed">
            Begin your construction project with an expert consultation. Our expert team will bring your vision to life with professional execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Contact Info - Now First */}
          <div className="h-full flex flex-col space-y-8">
            {/* Contact Information Section */}
            <div className="flex-1 bg-glass-white bg-opacity-70 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-gold border-opacity-20">
              {/* Contact Information Header */}
              <div className="flex justify-center w-full mb-8">
                <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-saffron to-gold border-2 border-orange-400 rounded-full px-8 py-5 shadow-glass font-display font-bold text-silk-white transition-all duration-300 hover:scale-105 hover:shadow-gold-glow focus:outline-none">
                  <span className="text-2xl">📞</span>
                  <span className="font-display font-bold text-2xl">Contact Information</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {/* Project Hotline Card */}
                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-2xl shadow-lg transform transition-transform hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-saffron to-gold p-3 rounded-xl">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-gray-800 text-xl">Project Hotline</h3>
                      <p className="text-gray-700 text-lg">+91 73030 15133</p>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-2xl shadow-lg transform transition-transform hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-saffron to-gold p-3 rounded-xl">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-gray-800 text-xl">Email</h3>
                      <p className="text-gray-700 text-lg">mukesh244@pm.me</p>
                    </div>
                  </div>
                </div>

                {/* Office Location Card */}
                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-2xl shadow-lg transform transition-transform hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-saffron to-gold p-3 rounded-xl">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-gray-800 text-xl">Office Location</h3>
                      <p className="text-gray-700 text-lg">Optimus Projects<br />Dhanashree Chs, Sector-13, Kharghar</p>
                    </div>
                  </div>
                </div>

                {/* Consultation Hours Card */}
                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-2xl shadow-lg transform transition-transform hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-saffron to-gold p-3 rounded-xl">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-gray-800 text-xl">Consultation Hours</h3>
                      <p className="text-gray-700 text-lg">Mon-Fri: 9AM-7PM<br />Sat: 10AM-5PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glassy CTA Box */}
            <div className="bg-glass-white bg-opacity-70 backdrop-blur-lg rounded-3xl p-8 text-center shadow-floating border border-gold border-opacity-30">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-onyx mb-2">Ready to Join Our Satisfied Clients?</h3>
              <p className="text-base md:text-lg text-charcoal-noir mb-6">Experience the OPTIMUS difference. Professional construction solutions with guaranteed results.</p>
              <a
                href="https://wa.me/917303015133?text=Hi%20OPTIMUS%20PROJECTS,%20I%20want%20to%20discuss%20a%20construction%20project..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-saffron to-gold text-silk-white px-6 py-3 rounded-full font-accent font-bold text-base md:text-lg transition-all duration-300 hover:scale-105 shadow-glass hover:shadow-gold-glow"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Start Your Project Today</span>
              </a>
            </div>
          </div>

          {/* Contact Form - Now Second */}
          <div className="h-full flex flex-col bg-glass-white bg-opacity-70 backdrop-blur-lg p-10 rounded-3xl shadow-xl border border-gold border-opacity-20">
            <div className="flex justify-center w-full mb-8">
              <button
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-saffron to-gold border-2 border-orange-400 rounded-full px-8 py-5 shadow-glass font-display font-bold text-2xl text-silk-white transition-all duration-300 hover:scale-105 hover:shadow-gold-glow focus:outline-none"
              >
                <span className="text-2xl">💬</span>
                <span>Post a Query</span>
              </button>
            </div>
            
            {/* Typeform Embed */}
            <div className="mb-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Status message removed as requested */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    required
                    className="w-full px-6 py-4 bg-silk-white border border-gold border-opacity-30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all duration-300 font-body"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    required
                    className="w-full px-6 py-4 bg-silk-white border border-gold border-opacity-30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all duration-300 font-body"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-6 py-4 bg-silk-white border border-gold border-opacity-30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all duration-300 font-body"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                  className="w-full px-6 py-4 bg-silk-white border border-gold border-opacity-30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all duration-300 font-body"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-silk-white border border-gold border-opacity-30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all duration-300 font-body text-charcoal-noir"
                >
                  <option value="">Select Service</option>
                  <option value="Waterproofing">Waterproofing</option>
                  <option value="Painting">Painting</option>
                  <option value="Tiling & Flooring">Tiling & Flooring</option>
                  <option value="Consultancy">Consultancy</option>
                  <option value="Plumbing Work">Plumbing Work</option>
                  <option value="Renovation">Renovation</option>
                  <option value="Electrical Work">Electrical Work</option>
                  <option value="Others">Others</option>
                </select>
                
                {/* Conditional input for "Others" service */}
                {formData.service === 'Others' && (
                  <input
                    type="text"
                    name="otherService"
                    value={formData.otherService}
                    onChange={handleInputChange}
                    placeholder="Please specify the service you need..."
                    className="w-full px-6 py-4 bg-silk-white border border-gold border-opacity-30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all duration-300 font-body"
                  />
                )}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your project details..."
                  rows={5}
                  required
                  className="w-full px-6 py-4 bg-silk-white border border-gold border-opacity-30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all duration-300 font-body resize-none"
                ></textarea>

                {/* File Upload Section */}
                <div className="space-y-4">
                  {/* Uploadcare Widget with Styled Button */}
                  <FileUploaderMinimal
                    sourceList="local, camera, facebook, gdrive"
                    useCloudImageEditor={false}
                    classNameUploader="uc-light uc-blue"
                    pubkey="ba97ac0889a617251b91"
                    onCommonUploadSuccess={(e) => {
                      e.successEntries.forEach(entry => {
                        const fileName = entry.fileInfo.name || `File_${Date.now()}`;
                        setUploadedFiles(prev => [...prev, `${fileName}: ${entry.cdnUrl}`]);
                        console.log("Uploaded files URL list", entry.cdnUrl);
                      });
                    }}
                  />
                  {/* Display uploaded files */}
                  {uploadedFiles.length > 0 && (
                    <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 border-2 border-green-200 p-6 rounded-2xl shadow-lg">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-xl">
                          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h5 className="text-xl font-bold text-green-800">Successfully Uploaded Files</h5>
                      </div>
                      <div className="grid gap-3">
                        {uploadedFiles.map((fileData, index) => {
                          const [fileName, fileUrl] = fileData.split(': ');
                          return (
                            <div key={index} className="flex items-center justify-between bg-white/70 border border-green-200 p-4 rounded-xl hover:shadow-md transition-shadow">
                              <div className="flex items-center space-x-3">
                                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                </div>
                                <div>
                                  <p className="font-semibold text-slate-800">{fileName}</p>
                                  <a 
                                    href={fileUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-blue-600 hover:text-blue-800 text-sm hover:underline"
                                  >
                                    View File →
                                  </a>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => setUploadedFiles(prev => prev.filter((_, i) => i !== index))}
                                className="bg-red-100 hover:bg-red-200 text-red-600 hover:text-red-700 p-2 rounded-lg transition-colors"
                                title="Remove file"
                              >
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-saffron to-gold text-white py-4 rounded-2xl font-display font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-gold-glow shadow-xl flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
            
            <div className="bg-glass-white bg-opacity-40 p-2 rounded-lg mt-2 flex items-center gap-2 w-fit mx-auto">
              <Clock className="h-4 w-4 text-gold" />
              <span className="font-accent font-semibold text-gold text-xs drop-shadow-sm">24-Hour Response Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
