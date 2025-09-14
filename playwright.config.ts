import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  use: {
    baseURL: 'https://www.saucedemo.com/',
    headless: true, // ✅ Modo headless ativado
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    viewport: { width: 1280, height: 720 },
    launchOptions: {
      args: [
        '--disable-notifications',
        '--disable-infobars',
        '--disable-popup-blocking',
        '--start-maximized',
        '--no-default-browser-check',
        '--disable-password-manager-reauthentication',
        '--disable-save-password-bubble',
        '--disable-credentials-enable-service',
        '--disable-automation',
        '--disable-blink-features=AutomationControlled',
      ],
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
