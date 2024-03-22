/// <reference types="cypress"/>

class cartSummary {
    elements = {
        proceedToCheckOutBtn: () => cy.get('.btn.btn-default.check_out'),
        registerLoginLink: () => cy.get('#checkoutModal a[href="/login"]')
    }

    // 5 - Click on “Proceed to Checkout”
    clickOnProceedToCheckoutbtn() {
        this.elements.proceedToCheckOutBtn().click();
    }

    // 5a - Click on Login on the modal
    clickOnRegisterLoginLink() {
        this.elements.registerLoginLink().click();
    }
}

module.exports = new cartSummary();