import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test('Remover item do carrinho', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  await page.waitForURL('**/inventory.html');

  await productsPage.addItemToCart('Sauce Labs Backpack');
  await productsPage.goToCart();

  await cartPage.removeItem('Sauce Labs Backpack');

  const itemNames = await cartPage.getItemNames();
  expect(itemNames).not.toContain('Sauce Labs Backpack');
});
