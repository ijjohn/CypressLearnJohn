import { url, url2 } from "../../support/app"
import userLogin from "../../support/userActions"

describe('To check add to cart functionality', () => {
   
    it('add to cart ', () => {
        cy.visit(url)
        userLogin.login("standard_user", "secret_sauce")
        cy.url().should('be.equal', url2)
        cy.get('.inventory_item_name').contains('Sauce Labs Backpack').get('#item_4_title_link').click()
        cy.screenshot()
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.inventory_details_name').contains('Sauce Labs Backpack')
        cy.screenshot()
        cy.get('#remove-sauce-labs-backpack').contains('Remove')
        cy.get('.shopping_cart_link').click()
        cy.contains('Your Cart')
        cy.get('.inventory_item_name').contains('Sauce Labs Backpack')
        cy.get('#continue-shopping').click()
        cy.get('#remove-sauce-labs-backpack').contains('Remove')
        cy.get('.shopping_cart_link').click()
        cy.screenshot()
        cy.get('.inventory_item_name').contains('Sauce Labs Backpack').get('#item_4_title_link').click()
        cy.get('.inventory_details_name').contains('Sauce Labs Backpack')
        cy.get('#remove-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-backpack').contains('Add to cart')
        cy.get('#back-to-products').click()
        cy.get('.header_secondary_container').contains('Products')
        cy.get('#add-to-cart-sauce-labs-backpack').contains('Add to cart')
        cy.get('.shopping_cart_link').click()
        cy.get('.inventory_item_name').should('not.have','Sauce Labs Backpack')
        cy.screenshot()
    })
})