import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test('Validar persistência do carrinho após logout e novo login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  const expectedItem = 'Sauce Labs Backpack';

  // Primeiro login e adição ao carrinho
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  await page.waitForURL('**/inventory.html');

  await productsPage.addItemToCart(expectedItem);
  await productsPage.logout();

  // Segundo login
  await loginPage.login('standard_user', 'secret_sauce');
  await page.waitForURL('**/inventory.html');

  await productsPage.goToCart();
  const cartItems = await cartPage.getItemNames();
  expect(cartItems).toContain(expectedItem);
});
