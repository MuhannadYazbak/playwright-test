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
        await page.goto('https://www.activetrail.com/free-trial/');
    });
    test_1.test.afterEach(async () => {
        await page.close();
    });
    test_1.test.afterAll(async () => {
        await browser.close();
    });
    (0, test_1.test)('search password error message', async () => {
        const password = await page.locator('//input[@id="password"]');
        await password.fill('123');
        await password.press('Tab');
        // Wait for the error message to appear
        const passError = await page.waitForSelector('//label[@id="password-error"]', { state: 'visible' });
        // Check the text of the error message
        (0, test_1.expect)(await passError.innerText()).toContain('Invalid value');
    });
    (0, test_1.test)('search email error message', async () => {
        const email = await page.locator('//input[@id="your-email"]');
        await email.fill('123');
        await email.press('Tab');
        // Wait for the error message to appear
        const emailError = await page.waitForSelector('//label[@id="your-email-error"]', { state: 'visible' });
        // Check the text of the error message
        (0, test_1.expect)(await emailError.innerText()).toContain('Invalid value');
    });
});
