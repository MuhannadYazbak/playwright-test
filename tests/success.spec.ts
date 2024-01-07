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
    const companyNameLocator = page.locator('//input[@name="your-company"]');
    const phoneNumber = page.locator('//input[@id="phone"]');
    const numberOfContacts = page.locator('//select[@id="your-contacts-count"]');
    await email.fill('yazbakm@gmail.com');
    await password.fill('Playwright@123');
    await firstName.fill('Muhannad');
    await lastName.fill('yazbak');
    await companyNameLocator.fill("Nvidia");
    await phoneNumber.fill('0548034062');
    await numberOfContacts.selectOption({label: '0 - 2,500'});
    
  });
  
  test.afterEach(async () => {
    await page.close();
  });
  
  test.afterAll(async () => {
    await browser.close();
  });
  
  test('check the checkmarks and click',async () => {
    const terms = page.locator('//*[@id="wpcf7-f66064-o1"]/form/div[2]/div/div[8]/div[1]/label/span');
    await terms.check();
    const anotherterm = page.locator('//*[@id="wpcf7-f66064-o1"]/form/div[2]/div/div[9]/div[1]/label/span');
    await anotherterm.check();
    const startButton = page.locator('//input[@type="submit"]');
    await startButton.click();
    await expect(page.url).not.toEqual('https://www.activetrail.com/free-trial/')
  });
});
