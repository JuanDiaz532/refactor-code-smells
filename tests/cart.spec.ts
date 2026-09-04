import { test, expect } from '@playwright/test';
import path from 'path';

test('el botón calcula y muestra el total correcto', async ({ page }) => {
  const filePath = 'file://' + path.resolve(__dirname, '../index.html');
  await page.goto(filePath);

  await expect(page.locator('#total')).toHaveText('$0');

  await page.click('#calculate');

  await expect(page.locator('#total')).toHaveText('$200');
});