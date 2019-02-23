import * as puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto('https://google.com/search?q=async+await');

  await page.screenshot({path: 'src/images/async-await.png'});

  await browser.close();
})();

