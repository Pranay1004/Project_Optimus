const puppeteer = require('puppeteer-core');
const path = require('path');
(async ()=>{
  // Prefer explicit executable path to avoid downloading Chromium. Set CHROME_PATH env var if needed.
  const defaultMac = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  const defaultChromium = '/Applications/Chromium.app/Contents/MacOS/Chromium';
  const executablePath = process.env.CHROME_PATH || (require('fs').existsSync(defaultMac) ? defaultMac : (require('fs').existsSync(defaultChromium) ? defaultChromium : null));
  if(!executablePath){
    console.error('No Chrome/Chromium executable found. Set CHROME_PATH env var to the browser binary.');
    process.exit(2);
  }
  const browser = await puppeteer.launch({executablePath, args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  const file = 'file://' + path.resolve(__dirname, 'pamphlet.html');
  await page.goto(file, {waitUntil: 'networkidle0'});
  await page.pdf({path:path.resolve(__dirname,'pamphlet.pdf'), format:'A4', landscape:true, printBackground:true, margin:{top:'10mm',bottom:'10mm',left:'8mm',right:'8mm'}});
  await browser.close();
  console.log('PDF created at pamphlet/pamphlet.pdf');
})();
