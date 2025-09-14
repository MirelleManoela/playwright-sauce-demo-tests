import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test('Validar elementos visuais essenciais após login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/.*inventory.html/);

  // Valida logo
  const logo = page.locator('.app_logo');
  await expect(logo).toBeVisible();

  // Valida ícone do carrinho
  const cartIcon = page.locator('.shopping_cart_link');
  await expect(cartIcon).toBeVisible();

  // Valida botão do menu lateral
  const menuButton = page.locator('#react-burger-menu-btn');
  await expect(menuButton).toBeVisible();

  // Abre menu e valida botão de logout
  await menuButton.click();
  const logoutButton = page.locator('#logout_sidebar_link');
  await expect(logoutButton).toBeVisible();
});
