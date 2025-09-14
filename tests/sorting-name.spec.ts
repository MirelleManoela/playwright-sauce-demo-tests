import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test('Ordenar produtos por nome (A to Z)', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  await page.waitForURL('**/inventory.html');

  await productsPage.sortProductsBy('az');
  const names = await productsPage.getProductNames();

  const sortedNames = [...names].sort((a, b) => a.localeCompare(b));
  expect(names).toEqual(sortedNames);
});
