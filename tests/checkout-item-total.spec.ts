import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { OverviewPage } from '../pages/OverviewPage';

test('Validar que o Item total é a soma dos valores dos itens do carrinho', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const overviewPage = new OverviewPage(page);

  const itemsToAdd = ['Sauce Labs Backpack', 'Sauce Labs Bolt T-Shirt'];

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  await page.waitForURL('**/inventory.html');

  for (const item of itemsToAdd) {
    await productsPage.addItemToCart(item);
  }

  await productsPage.goToCart();
  await cartPage.checkout();
  await checkoutPage.fillForm('Mirelle', 'Silva', '50000');
  await checkoutPage.continue();

  await page.waitForURL('**/checkout-step-two.html');

  const itemPrices = await overviewPage.getItemPrices();
  const expectedTotal = itemPrices.reduce((sum, price) => sum + price, 0);

  const displayedTotal = await overviewPage.getItemTotal();
  expect(displayedTotal).toBeCloseTo(expectedTotal, 2);
});
