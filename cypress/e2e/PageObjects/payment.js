/// <reference types="cypress"/>

class payment {
    elements = {
        nameCardInput: () => cy.get('[data-qa="name-on-card"]'),
        cardNoInput: () => cy.get('[data-qa="card-number"]'),
        CVCInput: () => cy.get('[data-qa="cvc"]'),
        expirationMonthInput: () => cy.get('[data-qa="expiry-month"]'),
        expirationYearInput: () => cy.get('[data-qa="expiry-year"]'),
        payBtn: () => cy.get('[data-qa="pay-button"]')
    }

    // 13 - Fill in fake Credit Card information and click on “Pay and Confirm Order”

    fillCreaditCard(nameCard, cardNo, cvc, expMonth, expYear) {
        this.elements.nameCardInput().type(nameCard);
        this.elements.cardNoInput().type(cardNo);
        this.elements.CVCInput().type(cvc);
        this.elements.expirationMonthInput().type(expMonth);
        this.elements.expirationYearInput().type(expYear);
    }

    clickOnPayBtn() {
        this.elements.payBtn().click();
    }
}
module.exports = new payment();