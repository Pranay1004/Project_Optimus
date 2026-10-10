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

    // Capture PNG of the `.flyer` element.
    // Note: both handle.screenshot() and page.screenshot() with
    // captureBeyondViewport: true hang indefinitely on this page, so grow the
    // viewport to contain the element and clip within it instead.
    const rect = await page.evaluate(() => {
      const r = document.querySelector('.flyer').getBoundingClientRect();
      return { x: r.x, y: r.y, width: r.width, height: r.height };
    });

    await page.setViewport({
      width: widthPx,
      height: Math.ceil(rect.y + rect.height) + 4,
      deviceScaleFactor: 1,
    });
    await new Promise(r => setTimeout(r, 200));

    const pngPath = path.resolve(__dirname, '..', 'flyer', 'flyer.png');
    await page.screenshot({
      path: pngPath,
      clip: {
        x: Math.round(rect.x),
        y: Math.round(rect.y),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
      },
      omitBackground: false,
    });

    console.log('Generated:', pdfPath);
    console.log('Generated:', pngPath);
  } catch (err) {
    console.error('Error generating flyer:', err);
    process.exitCode = 2;
  } finally {
    await browser.close();
  }
})();
