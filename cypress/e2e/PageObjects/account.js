/// <reference types="cypress"/>

class AccountPage {
    elements = {
        //LogIn
        loginMailInput :()=> cy.get('[data-qa="login-email"]'),
        loginPasswordInput :()=> cy.get('[data-qa="login-password"]'),
        loginBtn :()=> cy.get('[data-qa="login-button"]'),

        // New user signpu!
        nameInput: () => cy.get('[data-qa="signup-name"]'),
        emailInput: () => cy.get('[data-qa="signup-email"]'),
        signUPBtn: () => cy.get('[data-qa="signup-button"]'),
        // Account Information
        MrTitleRadio: () => cy.get('#id_gender1'),
        MrsTitleRadio: () => cy.get('#id_gender2'),
        passwordInput: () => cy.get('[data-qa="password"]'),
        dayInput: () => cy.get('[data-qa="days"]'),
        monthInput: () => cy.get('[data-qa="months"]'),
        yearsInput: () => cy.get('[data-qa="years"]'),
        // Address Information
        firstnameInput: () => cy.get('[data-qa="first_name"]'),
        lastnameInput: () => cy.get('[data-qa="last_name"]'),
        addressInput: () => cy.get('[data-qa="address"]'),
        countryInput: () => cy.get('[data-qa="country"]'),
        stateInput: () => cy.get('[data-qa="state"]'),
        cityInput: () => cy.get('[data-qa="city"]'),
        zipcodeInput: () => cy.get('[data-qa="zipcode"]'),
        mobileNoInput: () => cy.get('[data-qa="mobile_number"]'),
        
        createAccountBtn: () => cy.get('[data-qa="create-account"]'),

        // Account created elements
        accountCreatedLebel : ()=> cy.get('[data-qa="account-created"]'),
        continueBtn : ()=> cy.get('[data-qa="continue-button"]'),

        // userLogged
        userloggedLabel: ()=> cy.get('b')
    }

    /// 6 - Fill in an email address and click on “Register / Login”
    /// 7 - Enter name and email under “New User Signup”
    enterNewUserInformation(name, email) {
        this.elements.nameInput().type(name);
        this.elements.emailInput().type(email);
    }

    clickOnSignUpBtn() {
        this.elements.signUPBtn().click();
    }

    // 8 - Fill in all information and click on “Create Account”
    enterAccountInformation(title, password, day, month, year) {
        if (title == "Mr") {
            this.elements.MrTitleRadio().check();
        }
        else {
            this.elements.MrsTitleRadio().check();
        }

        this.elements.passwordInput().type(password);
        this.elements.dayInput().select(day);
        this.elements.monthInput().select(month);
        this.elements.yearsInput().select(year);
    }

    enterAddressInformation(firstname, lastname, address, country, state, city, zipCode, phone) {
        this.elements.firstnameInput().type(firstname);
        this.elements.lastnameInput().type(lastname);
        this.elements.addressInput().type(address);
        this.elements.countryInput().select(country);
        this.elements.stateInput().type(state);
        this.elements.cityInput().type(city);
        this.elements.zipcodeInput().type(zipCode);
        this.elements.mobileNoInput().type(phone);
    }

    clickOnCreateAccount() {
        this.elements.createAccountBtn().click();
    }

    // 9 - Click on “Continue” under “ACCOUNT CREATED!” title
    clickOnContinueBtn(){
        this.elements.continueBtn().click();
    }

    LogInUser(email,password){
        this.elements.loginMailInput().type(email);
        this.elements.loginPasswordInput().type(password);
        this.elements.loginBtn().click();
    }
}

module.exports = new AccountPage();