const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Go to the URL
  await page.goto('https://www.nisargsrishti.org/', { waitUntil: 'networkidle2' });

  // Extract all text content
  const content = await page.evaluate(() => {
    return document.body.innerText;
  });

  console.log(content);

  await browser.close();
})();
