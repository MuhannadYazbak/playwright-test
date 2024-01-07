import { test, expect, Browser, Page } from '@playwright/test';
import { chromium } from 'playwright';

test.describe('My Test Suite', () => {
  let browser: Browser;
  let page: Page;
  
  test.beforeAll(async () => {
    browser = await chromium.launch();
  });
  
  test.beforeEach(async () => {
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
  
  test.afterEach(async () => {
    await page.close();
  });
  
  test.afterAll(async () => {
    await browser.close();
  });
  
  test('missing company name',async () => {
    const companyNameLocator = page.locator('//input[@name="your-company"]');
    //companyNameLocator.fill('');
    await companyNameLocator.press('Enter');
    const companyError = page.locator('//label[@id="your-company-error"]');
    await expect(companyError).toBeVisible();
  });

  test('missing phone number',async () => {
    const companyNameLocator = page.locator('//input[@name="your-company"]');
    await companyNameLocator.fill('Nvidia');
    const phoneNumber = page.locator('//input[@id="phone"]');
    await phoneNumber.press('Enter');
    const phoneError = page.locator('//label[@id="phone-error"]');
    await expect(phoneError).toBeVisible();
  });
});
