import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test('Validar que o usuário consegue fazer logout e retorna à tela de login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/.*inventory.html/);

  await productsPage.logout();
  await expect(page).toHaveURL(/.*saucedemo.com\/$/);
  await expect(page.locator('#login-button')).toBeVisible();
});
