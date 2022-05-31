import { cloneDeep } from "cypress/types/lodash"

export default class userLogin {
    
    static missingpwd(username: string) {
        cy.get('#user-name').type(username)
        cy.get('#password').focus().clear()
        cy.get('#login-button').click()
        cy.get('h3').contains('Password is required')
        cy.get('.error-button').click
    }
    static missingusername(password : string)
    {
        cy.get('#user-name').focus().clear()
        cy.get('#password').type(password)
        cy.get('#login-button').click()
        cy.get('h3').contains('Username is required')
        cy.get('.error-button').click
    }
    static missingcred()
    {
        cy.get('#password').focus().clear() 
        cy.get('#user-name').focus().clear()
        cy.get('#login-button').click()
        cy.get('h3').contains('Username is required')
        cy.screenshot()
        cy.get('.error-button').click
    }
    static invalidcred(username: string , password:string)
    {
        cy.get('#password').focus().clear() 
        cy.get('#user-name').focus().clear()
        cy.get('#password').type(password)
        cy.get('#user-name').type(username)
        cy.get('#login-button').click()
        cy.get('h3').contains('Username and password do not match any user in this service') 
        cy.get('.error-button').click
    }
    static login(username:string,password:string)
    {
        cy.get('#password').focus().clear() 
        cy.get('#user-name').focus().clear()
        cy.get('#password').type(password)
        cy.get('#user-name').type(username)
        cy.get('#login-button').click()
        cy.get('.shopping_cart_link').should('have.class','shopping_cart_link')
        cy.get('.header_secondary_container').contains('Products')
       cy.screenshot()
    }
    static checkoutinfo(firstname:string,lastname:string,zipcode:string)
    {
        cy.get('#first-name').focus().clear().type(firstname)
        cy.get('#last-name').focus().clear().type(lastname) 
        cy.get('#postal-code').focus().clear().type(zipcode) 
        cy.screenshot()
    }

}

