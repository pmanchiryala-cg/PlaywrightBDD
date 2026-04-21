class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.locator("#username");
        this.password = page.locator("#password");
        this.submitButton = page.locator("#submit");
        this.successMessage = page.locator("h1");
        this.errorMessage = page.locator("#error");
        this.logoutButton = page.locator('text=Log out');
    }

    async launchURL(url) {
        await this.page.goto(url);
    }

    async enterUsrname(username) {
        await this.username.fill(username);
    }

    async enterPassword(password) {
        await this.password.fill(password);
    }   

    async clickLogin() {
        await this.submitButton.click();
    }
}

module.exports = { LoginPage };