import { test, expect } from '@playwright/test';

test('Add multiple items to cart and checkout', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');

  await page.click('.shopping_cart_link');

  await expect(page.locator('.cart_item')).toHaveCount(2);

  await page.click('[data-test="checkout"]');
  await page.fill('[data-test="firstName"]', 'John');
  await page.fill('[data-test="lastName"]', 'Doe');
  await page.fill('[data-test="postalCode"]', '12345');
  await page.click('[data-test="continue"]');

  await page.click('[data-test="finish"]');

  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});
