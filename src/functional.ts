import * as puppeteer from "puppeteer"

const url = "https://google.com/search?q=functional+programming"

puppeteer.launch().then(browser =>
  browser.newPage().then(page =>
    page
      .goto(url, { waitUntil: "networkidle0" })
      .then(() =>
        page.pdf({
          path: "src/images/functional-programming.pdf",
          format: "A4",
          printBackground: true,
        }),
      )
      .then(() => browser.close()),
  ),
)
