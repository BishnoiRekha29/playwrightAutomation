import { test, expect } from '@playwright/test';


test.skip('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByTestId('royal_email').click();
  await page.getByTestId('royal_email').fill('rekh@yahoo.co');
  await page.getByTestId('royal_pass').click();
  await page.getByTestId('royal_pass').fill('test123');
  await page.getByTestId('royal_login_button').click();
  await page.goto('https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNzMxNjgzMTgyLCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D&next');
  await page.getByText('The password that you\'ve').click();
  await page.getByText('The password that you\'ve').click();
  await page.getByRole('link', { name: 'Forgotten password?' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
});