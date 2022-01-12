const puppeteer = require('puppeteer');

async function scrape(word) {
    const browser = await puppeteer.launch({})
    const page = await browser.newPage()

    await page.goto(`https://www.thesaurus.com/browse/${word}`)

    const selector = "a[class*='css-1kg1yv8 eh475bn0']"
    var element = await page.$(selector)
    var text = await page.evaluate(it => it.text, element)
    
    browser.close()

    return text
}



async function main() {
    const args = process.argv.slice(2)
    
    if (args.length > 0) {
        await args.map(
            it => scrape(it)
                .then(result => console.log(result))
        )
    } else {
        console.error("No arguments provided")
    }
}

main()