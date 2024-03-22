/// <reference types = "cypress"/>
class contactUs{
    elements={
        emailInput :()=> cy.get('[data-qa="email"]'),
        submitBtn :()=> cy.get('[data-qa="submit-button"]'),
        statusLavel :()=> cy.get('.status'),
        backHomeBtn :()=> cy.get('span')
    }
    // 18 - Fill required data and Click on “Submit”
    completeFormWithRequiredFields(email){
        this.elements.emailInput().type(email);
    }

    clickOnSubmitBtn(){
        this.elements.submitBtn().click();
    }

    clickOnBackHomeBtn(){
        this.elements.backHomeBtn().click();
    }
}
module.exports = new contactUs();

