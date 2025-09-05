import { test, expect } from '@playwright/test';

test('palindrome check works', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.fill('#word', 'racecar');
  await page.click('#check');
  await expect(page.locator('#result')).toHaveText("Yes, it's a palindrome!");
});
