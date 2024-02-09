import {expect, test} from '@playwright/test'

const {HomePage} = require('../PageObjects/HomePage')
const {LoginPage} = require('../PageObjects/LoginPage')
const {CartPage} = require('../PageObjects/CartPage')
test.only("Place an order", async ({page})=>{

    //create objects
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);
    const productName = "Samsung galaxy s6";
    const username = "nikhilrao@test.com";
    const password = "Password1234";

    await homePage.load();
    await homePage.navigateToLoginPage();
    await loginPage.loginToApp(username, password);
    await loginPage.lnkLogout.waitFor();
    await expect(await homePage.getLoggedInUserName()).toContain("nikhilrao@test.com");

    await homePage.selectProduct(productName);
    await homePage.navigateToCartPage();

    await expect(page.url()).toContain("https://www.demoblaze.com/cart.html")
    await cartPage.lblProduct.waitFor();
    await expect(cartPage.verifyProductInCart(productName)).toBeTruthy();
});

