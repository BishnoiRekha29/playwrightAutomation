import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
 
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    //http://uitestingplayground.com/home
    await this.page.goto('https://playwright.dev');
  }

  async validateTitle() {
    await expect(this.page).toHaveTitle(/Playwright/);
  }

  async clickGetStarted() {
    await this.page.getByRole('link', { name: 'Get started' }).click();
  }

  async validateHeading(){
    await expect(this.page.getByRole('heading', { name: 'Installation' })).toBeVisible();
}
}