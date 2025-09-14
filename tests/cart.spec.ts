import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test('Adicionar item ao carrinho', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  await page.waitForURL('**/inventory.html');

  await productsPage.addItemToCart('Sauce Labs Backpack');
  await productsPage.goToCart();

  const itemNames = await cartPage.getItemNames();
  expect(itemNames).toContain('Sauce Labs Backpack');
});
