import { Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getItemNames(): Promise<string[]> {
    return this.page.locator('.inventory_item_name').allTextContents();
  }

  async removeItem(itemName: string) {
    const itemCard = this.page.locator('.cart_item').filter({ hasText: itemName });
    await itemCard.locator('button:has-text("Remove")').click();
  }

  async checkout() {
    await this.page.click('[data-test="checkout"]');
  }
}
