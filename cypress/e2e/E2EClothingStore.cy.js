/// <reference types =  "cypress"/>
import CartSummary from "./PageObjects/CartSummary";
import homeScreen from "./PageObjects/homeScreen";
import productDetails from "./PageObjects/productDetails";
import account from "./PageObjects/account";
import viewCart from "./PageObjects/viewCart";
import checkout from "./PageObjects/checkout";
import payment from "./PageObjects/payment";
import paymentDone from "./PageObjects/paymentDone";
import contactUs from "./PageObjects/contactUs";

describe('E2E Clouthing store scenarios', () => {
  it('All user flows', () => {
    cy.visit('https://automationexercise.com/')

    // Scroll down about halfway down the page and choosing a product
    homeScreen.ScrollDownHalfwayPage();
    homeScreen.chossingProduct();
    cy.url().should('include','/product_details/');


    // Enter a quantity prduct and add to cart
    productDetails.typeQuantityBox(30);
    productDetails.clickOnAddToCard();
    
    
    // Click on view to cart and proceed to checkout
    productDetails.clickOnViewCart();
    CartSummary.clickOnProceedToCheckoutbtn();

    
    // Start the registration flow

     /// This variables help to no create a repeated user
     const User = "user" + String(Math.floor(Math.random() * 1001));
     const userEmail = String(User+'@test.com');
     const password = "123456";

    CartSummary.clickOnRegisterLoginLink();
    account.enterNewUserInformation(User,userEmail);
    account.clickOnSignUpBtn();
    account.enterAccountInformation("Mr",password,"1","1","1900");
    account.enterAddressInformation("Jhon","Smith","This is an address", "Canada","State","City","55555","3333333333");
    account.clickOnCreateAccount();
    account.elements.accountCreatedLebel().should('have.text','Account Created!');


    // Click on Continue and go to cart
    account.clickOnContinueBtn();
    homeScreen.clickOnCartHeader();
    viewCart.clickOnProceedToCheckout();


    //Add a comment and order
    checkout.addCommentOnForm('This is a comment');
    checkout.clickOnPlaceOrder();
    
    //Add a payment and cofirm the order
    payment.fillCreaditCard('test','11111111111','1111','12','2030');
    payment.clickOnPayBtn();
    paymentDone.elements.orderConfirmationSelector().should('have.text','Congratulations! Your order has been confirmed!')
    
    // Click on Continue and logout on the top header
    paymentDone.clickOnContinueBtn();
    homeScreen.clickOnLogOutInHeader();

    // Login and click on contact us
    account.LogInUser(userEmail,password);
    account.elements.userloggedLabel().should('have.text',User);
    homeScreen.clickOnContactUsHeader();

    // Submit the contact us form with required fields
    contactUs.completeFormWithRequiredFields(userEmail);
    contactUs.clickOnSubmitBtn();
    contactUs.elements.statusLavel().should('have.text','Success! Your details have been submitted successfully.');

    //Back to home and logout
    contactUs.clickOnBackHomeBtn();
    homeScreen.clickOnLogOutInHeader();
    account.elements.loginBtn().should('be.visible');



  })

  
})