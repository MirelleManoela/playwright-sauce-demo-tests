import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login com credenciais inválidas exibe mensagem de erro', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('usuario_invalido', 'senha_invalida');

  const errorMessage = await loginPage.getErrorMessageText();
  expect(errorMessage).toContain('Username and password do not match');
});