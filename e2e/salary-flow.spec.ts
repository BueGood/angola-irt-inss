import { test, expect } from '@playwright/test';

test.describe('Salary Calculator App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('full salary calculation flow', async ({ page }) => {
    // Switch to Portuguese
    await page.click('button:has-text("Português")');
    // Switch back to English
    await page.click('button:has-text("English")');

    // Fill base salary and index
    await page.fill('input[type="number"] >> nth=0', '1000');
    await page.fill('input[type="number"] >> nth=1', '2');

    // Submit form
    await page.click('button:has-text("calculate")');

    // Expect salary display to appear with values
    await expect(page.getByText(/Gross Salary:/i)).toBeVisible();
    await expect(page.getByText(/Net Salary:/i)).toBeVisible();
  });
});
