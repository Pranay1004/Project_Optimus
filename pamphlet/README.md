Pamphlet (A4 tri-fold) — Optimus Projects

Files:
- pamphlet.html — The HTML layout for an A4 landscape tri-fold pamphlet. Open in browser and print to PDF.
- style.css — Styling for the pamphlet (A4 landscape, 3 columns)

How to produce a printable PDF (manual):
1. Open `pamphlet/pamphlet.html` in Chrome, Edge, or any Chromium browser.
2. File → Print (or Cmd+P).
3. Destination: "Save as PDF".
4. Paper size: A4. Layout: Landscape.
5. Scale: 100% / "Actual size".
6. Margins: "None" or "Minimum" depending on browser. If you see clipping, choose "Default" and reduce scale slightly.
7. Print/Save.

How to generate a PDF automatically (optional - requires Node.js and Puppeteer):

1. npm init -y
2. npm i puppeteer@latest
3. Create `render-pdf.js` with Puppeteer code to load `pamphlet.html` and save as PDF.

Example script:

```js
const puppeteer = require('puppeteer');
const path = require('path');
(async ()=>{
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const file = 'file://' + path.resolve(__dirname, 'pamphlet.html');
  await page.goto(file, {waitUntil: 'networkidle0'});
  await page.pdf({path:'pamphlet.pdf', format:'A4', landscape:true, printBackground:true});
  await browser.close();
})();
```

Then run:

```sh
node render-pdf.js
```

Notes:
- Images are embedded as inline SVG placeholders. Replace data-URL SVGs with high-resolution images for production print.
- Colors and fonts are intended for clean print results. Adjust to match your brand.

If you'd like, I can:
- Replace placeholder SVGs with your real images from `src/assets/icons`.
- Generate the PDF here and attach it (if you want an automated PDF generation now, let me know and I'll add the Puppeteer script and run it).