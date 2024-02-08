// @ts-check
/**
@param {import('@playwright/test').Page} page */

exports.HomePage = class HomePage 
{
    constructor(page)
    {
        this.page = page;
        this.iconProdStore = page.locator("#nava");
        this.lnkHome = page.getByRole('link',{name:"Home "});
        this.lnkContact = page.getByRole('link',{name:"Contact"});
        this.lnkLogin = page.locator("#login2");
        this.lnkSignup = page.getByRole('link', { name: 'Sign up' });
    }

    async navigateToLoginPage()
    {
        await this.lnkLogin.click();
    }

    async load()
    {
        await this.page.goto("https://www.demoblaze.com/");
        return this;
    }
}