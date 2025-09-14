import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Preencher os campos obrigatórios do checkout e avançar para overview', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  await page.waitForURL('**/inventory.html');

  await productsPage.addItemToCart('Sauce Labs Backpack');
  await productsPage.goToCart();
  await cartPage.checkout();

  await checkoutPage.fillForm('Mirelle', 'Silva', '50000');
  await checkoutPage.continue();

  await expect(page).toHaveURL(/.*checkout-step-two.html/);
});
