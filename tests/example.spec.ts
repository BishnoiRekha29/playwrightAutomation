import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js';

const test = base.extend<{ loginPage: LoginPage }>({
  loginPage: async ({ page }, use) => {
    
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
   // await loginPage.removeAll();
  },
});

test('has title', async ({ page,loginPage }) => {
 
 // await loginPage.goto();
 await loginPage.validateTitle();
  // Expect a title "to contain" a substring.
 
});

test('get started link', async ({ page,loginPage }) => {
 // await loginPage.goto();
  // Click the get started link.
  await loginPage.clickGetStarted(); 
  await loginPage.validateHeading();
  // Expects page to have a heading with the name of Installation.
 
});
