const puppeteer = require('puppeteer');

const URL = 'https://www.doctolib.fr/vaccination-covid-19/bordeaux-rue-ferbos-4753c02c-94f0-44f8-9997-c7f68a913d7e?ref_visit_motive_ids[]=6970&ref_visit_motive_ids[]=7005&force_max_limit=2';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(URL);
    await page.screenshot({ path: 'example.png' });

    await browser.close();
})();
