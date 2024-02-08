// @ts-check
/**

@param {import('@playwright/test').Page} Page */

exports.LoginPage = class LoginPage 
{
    constructor(page)
    {
        this.page = page;
        this.txtUsername = page.locator("#loginusername");
        this.txtPassword = page.locator("#loginpassword");
        this.btnLogin = page.getByRole('button',{name:"Log in"});
        this.btnClose = page.getByRole('button',{name:"Close"});
        this.lnkUsername = page.locator("#nameofuser");
        this.lnkLogout = page.locator("#logout2")
    }

    async enterUsername(username)
    {
        await this.txtUsername.fill(username);
    }

    async enterPassword(password)
    {
        await this.txtPassword.fill(password);
    }

    async clickLogin()
    {
        await this.btnLogin.click()
    }

    async loginToApp(username, password)
    {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }

    async getLoggedInUserName()
    {
        await console.log(this.lnkUsername.textContent());
        return this.lnkUsername.textContent();
    }
}