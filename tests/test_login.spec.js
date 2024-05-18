import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/login';

test('login_page', async ({ page }) => {

const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();

  await loginPage.login('demo@minimals.cc', 'demo1234');

  const result = page.getByRole('heading', { name: 'Welcome back 👋 Jaydon Frankie' });
  await expect(result).toHaveText('Welcome back 👋 Jaydon Frankie');
  
});

test('Update Billing Information', async ({ page }) => {
 
  const loginPage = new LoginPage(page);
 
  await loginPage.gotoLoginPage();
 
  await loginPage.login('demo@minimals.cc', 'demo1234');

  await loginPage.updateBilling();
 
  await page.getByRole('button', { name: 'Jayvion Simon' }).click();
  await page.getByPlaceholder('Search...').fill('Deja');

  const profileName = page.getByRole('button', { name: 'Deja Brady' });
  await profileName.click();

  const cardNumber = page.getByRole('heading', { name: '**** **** **** 1234' });

  await expect(profileName).toHaveText('Deja Brady');
  await expect(cardNumber).toHaveText('**** **** **** 1234');

});

test('Search_Order', async ({ page }) => {

  const loginPage = new LoginPage(page);
  
  await loginPage.gotoLoginPage();
  
  await loginPage.login('demo@minimals.cc', 'demo1234');

  await loginPage.List_search();

  await page.getByPlaceholder('Search customer or order').fill('cor');

  const numberOfUserLocator = page.getByText('1results found');
  const userCortezHerringLocator = page.getByText('Cortez Herring');
  
  await expect(userCortezHerringLocator).toHaveText('Cortez Herring');
  await expect(numberOfUserLocator).toHaveText('1results found');
  
});