import { url, url2 } from "../../support/app"
import userLogin from "../../support/userActions"

describe('To verify checkout functionality', () => { 
    it('checkout ', () => {
        cy.visit(url)
        userLogin.login("standard_user", "secret_sauce")
        cy.url().should('be.equal', url2)
        cy.screenshot()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
        cy.screenshot()
        cy.get('#remove-sauce-labs-bolt-t-shirt').contains('Remove')
        cy.get('.shopping_cart_link').click()
        cy.contains('Your Cart')
        cy.screenshot()
        cy.get('.inventory_item_name').contains('Sauce Labs Bolt T-Shirt')
        cy.screenshot()
        cy.get('#checkout').click()
        userLogin.checkoutinfo('test','user','06020')
        cy.screenshot()
        cy.get('#continue').click()
        cy.get('.inventory_item_name').contains('Sauce Labs Bolt T-Shirt')
        cy.get('#finish').click()
        cy.get('h2').contains('THANK YOU FOR YOUR ORDER')   
        cy.screenshot()
        cy.get('#back-to-products').click() 
        cy.get('.header_secondary_container').contains('Products')   
    })
})