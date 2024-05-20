import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test('Send Chat Message', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('demo@minimals.cc', 'demo1234');

    await loginPage.chat();

    await page.getByRole('button', { name: 'Deja Brady 0 Deja Brady You:' }).click();

    await page.getByPlaceholder('Type a message').click();

    await page.getByPlaceholder('Type a message').fill('Hello, how are you?');
    await page.getByPlaceholder('Type a message').press('Enter');

    const sentMessage = page.getByText('Hello, how are you?', { exact: true });
    await expect(sentMessage).toHaveText('Hello, how are you?');
});