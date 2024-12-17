import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login/LoginPage';
import { HomePage } from '../../pages/home/HomePage';

test('Successful login test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.load();
    await loginPage.fillUserName("SYSTEM");
    await loginPage.fillPassword("Aer@Line@1234");
    await loginPage.clickLoginButton();

    const homePage = new HomePage(page);
    await homePage.isWellcomeTextVisible();
});


test('Error login test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.load();
    await loginPage.fillUserName("SYSTEM");
    await loginPage.fillPassword("Aer@Line@12345");
    await loginPage.clickLoginButton();
    await loginPage.loginErrorShouldVisible();
});