import {expect, test} from '@playwright/test'
const {HomePage} = require('../PageObjects/HomePage')
const {LoginPage} = require('../PageObjects/LoginPage')
const {SignupPage} = require('../PageObjects/SignupPage')

test("Vaidate the error message when no input is provided for login", async ({page})=>{

    //create objects
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
  
    await homePage.load();
    await homePage.navigateToLoginPage();
    await expect(loginPage.btnLogin).toBeVisible();
   
    page.on('dialog', async (dialog) => {
        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toBe("Please fill out Username and Password.");
        await dialog.accept();
    });
    await loginPage.btnLogin.click();
});

test("Validate the error message on Signup with existing user details", async ({page})=>{

    //create objects
    const homePage = new HomePage(page);
    const signUpPage = new SignupPage(page);

    await homePage.load(); 
    await homePage.lnkSignup.click();

    page.on('dialog', async (dialog) => {
        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toBe("This user already exist.");
        await dialog.accept();
    });

    await signUpPage.signUpToApp("nikhil","password");
});

test("Login to App with valid credentials", async ({page})=>{

    //create objects
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await homePage.load(); 
    await homePage.navigateToLoginPage();
    await loginPage.loginToApp("nikhilrao@test.com","Password1234");
    await loginPage.lnkLogout.waitFor();
    await expect(await homePage.getLoggedInUserName()).toContain("nikhilrao@test.com");
});

