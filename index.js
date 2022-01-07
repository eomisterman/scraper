const puppeteer = require('puppeteer');

async function scrape() {
    const browser = await puppeteer.launch({})
    const page = await browser.newPage()

    await page.goto('https://www.thesaurus.com/browse/smart')
    var element = await page.waitForSelector(".css-1svjmo3 > li:nth-child(1) > a:nth-child(1)")
    var text = await page.evaluate(it => it.text, element)
    console.log(text)
    browser.close()
}

scrape()
console.log("Hello, world")