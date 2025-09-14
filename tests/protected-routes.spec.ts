import { test, expect } from '@playwright/test';

test.describe('Validação de acesso direto a URLs protegidas sem login', () => {
  const protectedPaths = [
    '/inventory.html',
    '/cart.html',
    '/checkout-step-one.html',
    '/checkout-step-two.html',
    '/checkout-complete.html'
  ];

  for (const path of protectedPaths) {
    test(`Acesso direto a ${path} sem login deve redirecionar para tela de login`, async ({ page }) => {
      await page.goto(`https://www.saucedemo.com${path}`);
      await expect(page).toHaveURL('https://www.saucedemo.com/');
      await expect(page.locator('#login-button')).toBeVisible();
    });
  }
});
