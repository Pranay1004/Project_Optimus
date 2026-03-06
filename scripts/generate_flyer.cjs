const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  try {
    const page = await browser.newPage();

    // Set viewport close to A4 at 96 DPI
    const mmToPx = mm => Math.round((mm / 25.4) * 96);
    const widthPx = mmToPx(210);
    const heightPx = mmToPx(297);
    await page.setViewport({ width: widthPx, height: heightPx, deviceScaleFactor: 1 });

    const fileUrl = 'file://' + path.resolve(__dirname, '..', 'flyer', 'index.html');
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });

    // Ensure any dynamic fonts/styles are applied
    await new Promise(r => setTimeout(r, 200));

    // Save PDF (A4, full-bleed attempt with zero margins)
    const pdfPath = path.resolve(__dirname, '..', 'flyer', 'flyer.pdf');
    await page.pdf({ path: pdfPath, format: 'A4', printBackground: true, margin: { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' } });

    // Capture PNG of the `.flyer` element using element.screenshot() (more reliable)
    const flyerHandle = await page.$('.flyer');
    const pngPath = path.resolve(__dirname, '..', 'flyer', 'flyer.png');
    if (flyerHandle) {
      await flyerHandle.screenshot({ path: pngPath, omitBackground: false });
    } else {
      // fallback to full page screenshot
      await page.screenshot({ path: pngPath, fullPage: true });
    }

    console.log('Generated:', pdfPath);
    console.log('Generated:', pngPath);
  } catch (err) {
    console.error('Error generating flyer:', err);
    process.exitCode = 2;
  } finally {
    await browser.close();
  }
})();
