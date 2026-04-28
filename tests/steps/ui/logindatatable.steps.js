const {createBdd} = require('playwright-bdd');
const {Given, When, Then, Before} = createBdd();
const {LoginPage} = require('../../pages/LoginPage');
const {expect} = require('@playwright/test');

let loginPage;
let actualMessages = [];

Before(async ({page}) => {
  loginPage = new LoginPage(page);
});

Given('User navigate to the login page {string}', async ({}, url) => {
  await loginPage.launchURL(url)
});

When('User login with the following details:', async function ({}, dataTable) {
    const rows = dataTable.hashes();
    actualMessages = [];

    for (const row of rows) {
        const { username, password } = row;

        await loginPage.enterUsrname(username);
        await loginPage.enterPassword(password);
        await loginPage.clickLogin();

        let message;

        // Capture message
        if (await loginPage.successMessage.isVisible()) {
            message = await loginPage.successMessage.textContent();
            console.log("Success message: ", message);
        } else {
            message = await loginPage.errorMessage.textContent();
            console.log("Error message: ", message);
        }

        actualMessages.push(message.trim());
        console.log("Actual Messages so far: ", actualMessages);

        // Navigate back for next iteration
        //await this.page.goBack();
    }
});

Then('User should see the corresponding messages:', async function ({}, dataTable) {
    const expectedRows = dataTable.hashes();
    const expectedMessages = expectedRows.map(row => row.message.trim());
    expect(actualMessages).toEqual(expectedMessages);
});

