import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test('Ordenar produtos por preço (maior para o menor)', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  await page.waitForURL('**/inventory.html');

  await productsPage.sortProductsBy('hilo');
  const prices = await productsPage.getProductPrices();

  const sortedPrices = [...prices].sort((a, b) => b - a);
  expect(prices).toEqual(sortedPrices);
});
