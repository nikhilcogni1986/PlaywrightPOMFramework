import {expect, test} from '@playwright/test'
const {HomePage} = require('../PageObjects/HomePage')
const {LoginPage} = require('../PageObjects/LoginPage')
test.only("Place an order", async ({page})=>{

    //create objects
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await homePage.load(); 
    await homePage.navigateToLoginPage();
    await loginPage.loginToApp("nikhilrao@test.com","Password1234");
    await loginPage.lnkLogout.waitFor();
    expect (loginPage.lnkUsername).toBeVisible();

    await homePage.selectProduct("Samsung galaxy s6");
    await homePage.navigateToCartPage();
});

