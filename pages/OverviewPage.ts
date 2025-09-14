import { Page } from '@playwright/test';

export class OverviewPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getItemNames(): Promise<string[]> {
    return this.page.locator('.inventory_item_name').allTextContents();
  }

  async getItemPrices(): Promise<number[]> {
    return this.page.$$eval('.inventory_item_price', elements =>
      elements.map(el => parseFloat(el.textContent?.replace('$', '') || '0'))
    );
  }

  async getItemTotal(): Promise<number> {
    const totalText = await this.page.locator('.summary_subtotal_label').innerText();
    const match = totalText.match(/Item total:\s*\$(\d+\.\d{2})/);
    return match ? parseFloat(match[1]) : 0;
  }

  async getTax(): Promise<number> {
    const taxText = await this.page.locator('.summary_tax_label').innerText();
    const match = taxText.match(/Tax:\s*\$(\d+\.\d{2})/);
    return match ? parseFloat(match[1]) : 0;
  }

  async getFinalTotal(): Promise<number> {
    const totalText = await this.page.locator('.summary_total_label').innerText();
    const match = totalText.match(/Total:\s*\$(\d+\.\d{2})/);
    return match ? parseFloat(match[1]) : 0;
  }

  async finish() {
    await this.page.click('[data-test="finish"]');
  }
}
