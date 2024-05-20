import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/login';

test('login_page', async ({ page }) => {

const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();

  await loginPage.login('demo@minimals.cc', 'demo1234');

  const result = page.getByRole('heading', { name: 'Welcome back 👋 Jaydon Frankie' });
  await expect(result).toHaveText('Welcome back 👋 Jaydon Frankie');
  
});
