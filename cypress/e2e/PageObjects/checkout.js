/// <reference types = "cypress"/>

class checkout{
    elements = {
        commentForm :()=> cy.get('.form-control'),
        placeOrderBtn :()=> cy.get(':nth-child(7) > .btn')
    }

    // 12 - Add a comment and click on “Place Order”

    addCommentOnForm(comment){
        this.elements.commentForm().type(comment);
    }

    clickOnPlaceOrder(){
        this.elements.placeOrderBtn().click();
    }

}

module.exports = new checkout();