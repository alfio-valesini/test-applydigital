/// <reference types = "cypress" />

class homePage {
    elements = {
        cartHeader:()=> cy.get('.shop-menu > .nav > :nth-child(3) > a'),
        logOutInHeader:() => cy.get('.shop-menu > .nav > :nth-child(4) > a'),
        contactUsHeader:()=> cy.get(':nth-child(9) > a'),
        viewProductBtn: () => cy.get('a[href="/product_details/30"]')
    }

    // 1 - Scroll down about halfway down the page
    ScrollDownHalfwayPage() {
        cy.scrollTo('center');
    }
    // 2 - Chose a product and click on “View product”
    chossingProduct(){
        this.elements.viewProductBtn().click();
    }

    // 10 - Click on the Cart in the header
    clickOnCartHeader(){
        this.elements.cartHeader().click();
    }

    // 15 - Click on “Logout” on top header
    clickOnLogOutInHeader(){
        this.elements.logOutInHeader().click();
    }

    // 17 - Click on “Contact us” on the header
    clickOnContactUsHeader(){
        this.elements.contactUsHeader().click();
    }
}

module.exports = new homePage();