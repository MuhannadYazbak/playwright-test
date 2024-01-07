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
  });
  
  test.afterEach(async () => {
    await page.close();
  });
  
  test.afterAll(async () => {
    await browser.close();
  });
  
  test('search password error message', async () => {
    const password = await page.locator('//input[@id="password"]');
    await password.fill('123');
    await password.press('Tab');

    // Wait for the error message to appear
    const passError = await page.waitForSelector('//label[@id="password-error"]', { state: 'visible' });

    // Check the text of the error message
    expect(await passError.innerText()).toContain('Invalid value');
  });
  test('search email error message', async () => {
    const email = await page.locator('//input[@id="your-email"]');
    await email.fill('123');
    await email.press('Tab');

    // Wait for the error message to appear
    const emailError = await page.waitForSelector('//label[@id="your-email-error"]', { state: 'visible' });

    // Check the text of the error message
    expect(await emailError.innerText()).toContain('Invalid value');
  });
  test('search firstName error message', async () => {
    const firstName = await page.locator('//input[@name="your-name"]');
    await firstName.fill('123');
    await firstName.press('Tab');

    // Wait for the error message to appear
    const firstNameError = await page.waitForSelector('//label[@id="your-name-error"]', { state: 'visible' });

    // Check the text of the error message
    expect(await firstNameError.innerText()).toContain('Invalid value');
  });
  test('search lastName error message', async () => {
    const lastName = await page.locator('//input[@name="your-last-name"]');
    await lastName.fill('123');
    await lastName.press('Tab');

    // Wait for the error message to appear
    const lastNameError = await page.waitForSelector('//label[@id="your-last-name-error"]', { state: 'visible' });

    // Check the text of the error message
    expect(await lastNameError.innerText()).toContain('Invalid value');
  });
});
