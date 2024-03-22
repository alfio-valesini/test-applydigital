///<reference types="cypress" />

class productDetails {
    elements = {
        quantitySelector: () => cy.get("#quantity"),
        addToCardbtnBtn: () => cy.get("button.btn.btn-default.cart"),
        viewCartLink: () => cy.get('#cartModal a[href="/view_cart"]'),
    }

    // 3 - In the Quantity box enter 30
    typeQuantityBox(quantity) {
        this.elements.quantitySelector().clear().type(quantity); //clear method helps to clean the input
    }

    // 4 - Click “Add to cart”
    clickOnAddToCard() {
        this.elements.addToCardbtnBtn().click();
    }

    // 4a - Click on ViewCart insted of continue shopping on the modal
    clickOnViewCart() {
        this.elements.viewCartLink().click();
    }
}

module.exports = new productDetails();