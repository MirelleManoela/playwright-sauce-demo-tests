import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test('Validar que o botão "Remove" remove apenas o item selecionado do carrinho', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  const itemToRemove = 'Sauce Labs Backpack';
  const itemToKeep = 'Sauce Labs Bike Light';

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  await page.waitForURL('**/inventory.html');

  await productsPage.addItemToCart(itemToRemove);
  await productsPage.addItemToCart(itemToKeep);
  await productsPage.goToCart();

  await cartPage.removeItem(itemToRemove);

  const cartItems = await cartPage.getItemNames();
  expect(cartItems).not.toContain(itemToRemove);
  expect(cartItems).toContain(itemToKeep);
});
