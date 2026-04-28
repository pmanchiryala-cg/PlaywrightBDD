const { createBdd } = require('playwright-bdd');
const { Given, When, Then, Before } = createBdd();
const { LoginPage } = require('../../pages/LoginPage');
const { expect } = require('@playwright/test');

let loginPage;

Before(async ({ page }) => {
    loginPage = new LoginPage(page);
});

Given('I navigate to the login homepage {string}', async ({ page }, url) => {
    await loginPage.launchURL(url);
});

When('I login with uname {string} and pwd {string}',
    async ({ page }, uname, pwd) => {
        await loginPage.enterUsrname(uname);
        await loginPage.enterPassword(pwd);
        await loginPage.clickLogin();
    }
);

Then('I should see a {string} message {string}',
    async ({ page }, type, expectedMessage) => {
        let locator;

        if (type === 'success') {
            locator = loginPage.successMessage;
        } else if (type === 'error') {
            locator = loginPage.errorMessage;
        } else {
            throw new Error(`Unknown message type: ${type}`);
        }

        await expect(locator).toBeVisible();
        await expect(locator).toHaveText(expectedMessage);
    }
);