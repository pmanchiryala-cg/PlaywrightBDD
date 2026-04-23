const {createBdd} = require('playwright-bdd');
const {Given, When, Then, Before} = createBdd();
const {LoginPage} = require('../../pages/LoginPage');
const {expect} = require('@playwright/test');

let loginPage

Before(async ({page}) => {
  loginPage = new LoginPage(page);
});

Given('I navigate to the login page {string}', async ({}, url) => {
  await loginPage.launchURL(url)
});

When('I login with username {string} and password {string}',
  async function ({}, username, password) {
    await loginPage.enterUsrname(username);
    await loginPage.enterPassword(password);
    await loginPage.clickLogin();
  }
);

Then('I should see a success message {string}',
  async function ({}, message) {
    await expect(loginPage.successMessage).toHaveText(message);
  }
);

Then('I should see an error message {string}',
  async function ({}, message) {
    await expect(loginPage.errorMessage).toHaveText(message);
  }
);

/*

Then('I should see message {string}',
  async function ({}, message) {
    await expect(loginPage.message).toHaveText(message);
  }
);

*/