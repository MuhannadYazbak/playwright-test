"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const playwright_1 = require("playwright");
test_1.test.describe('My Test Suite', () => {
    let browser;
    let page;
    test_1.test.beforeAll(async () => {
        browser = await playwright_1.chromium.launch();
    });
    test_1.test.beforeEach(async () => {
        page = await browser.newPage();
        let url = page.url();
        (0, test_1.expect)(url).toBe(' https://www.activetrail.com/free-trial/');
    });
    test_1.test.afterEach(async () => {
        await page.close();
    });
    test_1.test.afterAll(async () => {
        await browser.close();
    });
    (0, test_1.test)('search password error message', async () => {
        const password = page.locator('password');
        await password.fill('123');
        await password.press('Enter');
        (0, test_1.expect)(page.locator('password-error')).toBeVisible();
    });
});
