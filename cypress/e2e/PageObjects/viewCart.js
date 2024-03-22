/// <reference types="cypress"/>

class viewCart{
    elements = {
        proceedureBtn: ()=> cy.get('.col-sm-6 > .btn'),
    }

    clickOnProceedToCheckout(){
        this.elements.proceedureBtn().click();
    }
}

module.exports = new viewCart();