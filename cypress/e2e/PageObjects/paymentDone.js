/// <reference types="cypress"/>

class paymentDone {
    elements = {
        contineBtn: () => cy.get('[data-qa="continue-button"]'),
        orderConfirmationSelector: () => cy.get('.col-sm-9 > p')
    }

    // 14 - Click on “Continue” button
    clickOnContinueBtn() {
        this.elements.contineBtn().click();
    }
}
module.exports = new paymentDone();