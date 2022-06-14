import { url, url2 } from "../../support/app"
import userLogin from "../../support/userActions"
describe('To check login flow', () => {
  it('Negative scenarios', () => {
    cy.visit(url)
    userLogin.missingpwd("test_user")
    userLogin.missingusername("12345")
    userLogin.missingcred()
    userLogin.invalidcred("abc", "testlogin")
  })

  it('Happy Path', () => {
    cy.visit(url)
    userLogin.login("standard_user", "secret_sauce")
    cy.url().should('be.equal',url2)
  })
})