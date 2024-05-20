import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/login';

test('Filter Jobs', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('demo@minimals.cc', 'demo1234');
  
    await loginPage.Job_search_Filter()
  
    await page.getByRole('button').nth(1).click();
  
    const jobCards = await page.locator('div.job-card');
    const jobCount = await jobCards.count();
    for (let i = 0; i < jobCount; i++) {
        const jobCardText = await jobCards.nth(i).textContent();
        console.log(jobCardText)
        expect(jobCardText).toContain('On Demand');
    }
    });
  
  
  