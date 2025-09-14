import { Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillForm(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill('[data-test="firstName"]', firstName);
    await this.page.fill('[data-test="lastName"]', lastName);
    await this.page.fill('[data-test="postalCode"]', postalCode);
  }

  async continue() {
    await this.page.click('[data-test="continue"]');
  }

  async getErrorMessage(): Promise<string> {
    return this.page.locator('[data-test="error"]').innerText();
  }
}
