const { test } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');

test('Valid Login', async ({ page }) => {

    await page.goto('http://localhost:4200');

    const loginPage = new LoginPage(page);

    await loginPage.login(
        'lakhan_uat@gmail.com',
        'Gautam@12345'
    );

});