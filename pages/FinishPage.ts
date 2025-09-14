import { Page, Locator } from '@playwright/test';

export class FinishPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getConfirmationMessage(): Promise<string> {
    return this.page.locator('.complete-header').innerText();
  }

  getBackHomeButton(): Locator {
    return this.page.locator('[data-test="back-to-products"]');
  }

  async clickBackHome() {
    await this.getBackHomeButton().click();
  }
}
