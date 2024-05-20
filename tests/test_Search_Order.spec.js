import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/login';

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
  