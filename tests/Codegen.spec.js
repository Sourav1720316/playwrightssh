import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).fill('Playwright');
  await page.getByText('playwright', { exact: true }).click();
  await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();
});