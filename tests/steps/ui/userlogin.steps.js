const {createBdd} = require('playwright-bdd');
const {Given, When, Then, Before} = createBdd();
const {LoginPage} = require('../../pages/LoginPage');
const {expect} = require('@playwright/test');

let loginPage

Before(async ({page}) => {
  loginPage = new LoginPage(page);
});

Given('I navigate to {string}', async ({}, url) => {
  await loginPage.launchURL(url)
});

When('I enter valid credentials username {string} and password {string}', async ({}, username, password) => {
    await loginPage.enterUsrname(username);
    await loginPage.enterPassword(password);
  
});

When('I click on the login button', async () => {
    await loginPage.clickLogin();
});

Then('I should see the page containing {string}', async ({}, expectedText) => {
    await expect(loginPage.successMessage).toContainText(expectedText);
});