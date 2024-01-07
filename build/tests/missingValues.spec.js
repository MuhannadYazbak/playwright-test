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
        const email = page.locator('//input[@name="your-email"]');
        const password = page.locator('//input[@name="password"]');
        const firstName = page.locator('//input[@name="your-name"]');
        const lastName = page.locator('//input[@name="your-last-name"]');
        await email.fill('yazbakm@gmail.com');
        await password.fill('Playwright@123');
        await firstName.fill('Muhannad');
        await lastName.fill('yazbak');
    });
    test_1.test.afterEach(async () => {
        await page.close();
    });
    test_1.test.afterAll(async () => {
        await browser.close();
    });
    (0, test_1.test)('missing company name', async () => {
        const companyNameLocator = page.locator('//input[@name="your-company"]');
        //companyNameLocator.fill('');
        await companyNameLocator.press('Enter');
        const companyError = page.locator('//label[@id="your-company-error"]');
        await (0, test_1.expect)(companyError).toBeVisible();
    });
    (0, test_1.test)('missing phone number', async () => {
        const companyNameLocator = page.locator('//input[@name="your-company"]');
        await companyNameLocator.fill('Nvidia');
        const phoneNumber = page.locator('//input[@id="phone"]');
        await phoneNumber.press('Enter');
        const phoneError = page.locator('//label[@id="phone-error"]');
        await (0, test_1.expect)(phoneError).toBeVisible();
    });
});
