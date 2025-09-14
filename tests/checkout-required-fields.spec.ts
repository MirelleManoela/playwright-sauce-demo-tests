import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Validação de campos obrigatórios no checkout', () => {
  let loginPage: LoginPage;
  let productsPage: ProductsPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await page.waitForURL('**/inventory.html');

    await productsPage.addItemToCart('Sauce Labs Backpack');
    await productsPage.goToCart();
    await cartPage.checkout();
  });

  test('Não preencher nenhum campo', async ({ page }) => {
    await checkoutPage.continue();
    const error = await checkoutPage.getErrorMessage();
    expect(error).toContain('Error: First Name is required');
  });

  test('Preencher apenas First Name', async ({ page }) => {
    await checkoutPage.fillForm('Mirelle', '', '');
    await checkoutPage.continue();
    const error = await checkoutPage.getErrorMessage();
    expect(error).toContain('Error: Last Name is required');
  });

  test('Preencher apenas Last Name', async ({ page }) => {
    await checkoutPage.fillForm('', 'Silva', '');
    await checkoutPage.continue();
    const error = await checkoutPage.getErrorMessage();
    expect(error).toContain('Error: First Name is required');
  });

  test('Preencher apenas Zip/Postal Code', async ({ page }) => {
    await checkoutPage.fillForm('', '', '50000');
    await checkoutPage.continue();
    const error = await checkoutPage.getErrorMessage();
    expect(error).toContain('Error: First Name is required');
  });
});
