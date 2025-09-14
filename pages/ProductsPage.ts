import { Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addItemToCart(itemName: string) {
    const itemCard = this.page.locator('.inventory_item').filter({ hasText: itemName });
    await itemCard.locator('button:has-text("Add to cart")').click();
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }

  async sortProductsBy(option: 'az' | 'za' | 'lohi' | 'hilo') {
    const dropdown = this.page.locator('select.product_sort_container');
    await dropdown.selectOption(option);
  }

  async sortByPriceLowToHigh() {
    await this.sortProductsBy('lohi');
  }

  async sortByPriceHighToLow() {
    await this.sortProductsBy('hilo');
  }

  async sortByNameAZ() {
    await this.sortProductsBy('az');
  }

  async sortByNameZA() {
    await this.sortProductsBy('za');
  }

  async getProductPrices(): Promise<number[]> {
    const prices = await this.page.$$eval('.inventory_item_price', elements =>
      elements.map(el => parseFloat(el.textContent?.replace('$', '') || '0'))
    );
    return prices;
  }

  async getProductNames(): Promise<string[]> {
    const names = await this.page.$$eval('.inventory_item_name', elements =>
      elements.map(el => el.textContent?.trim() || '')
    );
    return names;
  }

  async logout() {
    await this.page.click('#react-burger-menu-btn');
    await this.page.waitForSelector('#logout_sidebar_link', { state: 'visible' });
    await this.page.click('#logout_sidebar_link');
  }
}
