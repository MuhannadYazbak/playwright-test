"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const playwright_1 = require("playwright");
(async () => {
    const browser = await playwright_1.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://playwright.dev/');
    console.log(await page.title());
    await browser.close();
})();
