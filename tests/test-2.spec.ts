import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.bankbazaar.com/');
  await page.getByRole('link', { name: 'Bankbazaar Products Credit Card', exact: true }).click();
  await page.goto('https://www.bankbazaar.com/credit-card.html?WT.mc_id=SEO_Gateway_stack&utm_source=bb&utm_medium=seo&utm_campaign=SEO_Gateway_stack');
  await page.locator('label').filter({ hasText: 'SalariedEarn regular monthly' }).locator('div').first().click();
  await page.getByPlaceholder('PIN Code').fill('123344');
  await page.getByRole('button', { name: 'Continue' }).click();
  //await page.locator('label').filter({ hasText: 'Bangalore' }).locator('div').first().click();
  // await page.getByPlaceholder('My Mobile (Required)').fill('4234322342');
  // await page.getByRole('button', { name: 'Submit' }).click();
  // await page.getByRole('button', { name: 'Submit' }).click();
  const errorMsgXpath="//div[@class='ui pink pointing above label bounce display-table  fluid']";
  const value = await page.locator(errorMsgXpath).getAttribute('text');
  console.log(value);
});