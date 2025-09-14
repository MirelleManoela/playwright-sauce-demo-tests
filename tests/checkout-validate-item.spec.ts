import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { OverviewPage } from '../pages/OverviewPage';

test('Realizar o checkout validando se o item inserido no carrinho foi o correto', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const overviewPage = new OverviewPage(page);

  const expectedItem = 'Sauce Labs Backpack';

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  await page.waitForURL('**/inventory.html');

  await productsPage.addItemToCart(expectedItem);
  await productsPage.goToCart();

  const cartItems = await cartPage.getItemNames();
  expect(cartItems).toContain(expectedItem);

  await cartPage.checkout();
  await checkoutPage.fillForm('Mirelle', 'Silva', '50000');
  await checkoutPage.continue();

  await page.waitForURL('**/checkout-step-two.html'); // ✅ Valida que estamos na página de overview

  const overviewItems = await overviewPage.getItemNames();
  expect(overviewItems).toContain(expectedItem);
});
