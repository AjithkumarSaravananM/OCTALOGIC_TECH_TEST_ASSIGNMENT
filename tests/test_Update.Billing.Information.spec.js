import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/login';

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
  