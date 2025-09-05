import { test, expect } from '@playwright/test';

test('anagram check works', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.fill('#word1', 'listen');
  await page.fill('#word2', 'silent');
  await page.click('#check');
  await expect(page.locator('#result')).toHaveText("Yes, they are anagrams!");
});
