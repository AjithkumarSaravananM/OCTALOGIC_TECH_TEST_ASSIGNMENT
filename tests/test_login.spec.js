import { test, expect } from '@playwright/test';

test('login_page', async ({ page }) => {

  await page.goto('https://minimals.cc/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByLabel('Email address').click();
  await page.getByLabel('Email address').fill('demo@minimals.cc');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('demo1234');
  await page.getByRole('button', { name: 'Login' }).click();
 });
