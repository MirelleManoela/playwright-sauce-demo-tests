import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { OverviewPage } from '../pages/OverviewPage';
import { FinishPage } from '../pages/FinishPage';

test('Validar que ao finalizar a compra aparece a mensagem "Thank you for your order!"', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const overviewPage = new OverviewPage(page);
  const finishPage = new FinishPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  await page.waitForURL('**/inventory.html');

  await productsPage.addItemToCart('Sauce Labs Backpack');
  await productsPage.goToCart();
  await cartPage.checkout();
  await checkoutPage.fillForm('Mirelle', 'Silva', '50000');
  await checkoutPage.continue();

  await overviewPage.finish();

  const message = await finishPage.getConfirmationMessage();
  expect(message).toContain('Thank you for your order!');
});
