import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test('Validar ordenação combinada por nome e preço', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  await page.waitForURL('**/inventory.html');

  // Ordenar por nome A-Z
  await productsPage.sortByNameAZ();
  const namesAZ = await productsPage.getProductNames();
  const sortedNamesAZ = [...namesAZ].sort((a, b) => a.localeCompare(b));
  expect(namesAZ).toEqual(sortedNamesAZ);

  // Ordenar por preço low to high
  await productsPage.sortByPriceLowToHigh();
  const pricesLowToHigh = await productsPage.getProductPrices();
  const sortedPrices = [...pricesLowToHigh].sort((a, b) => a - b);
  expect(pricesLowToHigh).toEqual(sortedPrices);
});
