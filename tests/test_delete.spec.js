import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test('Send Chat Message', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('demo@minimals.cc', 'demo1234');

    await loginPage.delete();


    await page.getByRole('row', { name: 'Name sorted ascending Size' }).getByRole('checkbox').check();
    await page.getByLabel('Delete').click();
    await page.getByRole('button', { name: 'Delete' }).click();;
    
    const result =  await page.getByText('No Data');
    await expect(result).toHaveText('No Data');

    });