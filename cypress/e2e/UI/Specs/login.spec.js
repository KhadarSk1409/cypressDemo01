import testData from '../../../fixtures/testdata.json'
import { loginPage } from '../pageObjects/login';

describe('Login Test Suite', () => {

    before(function () {
      // runs once before all tests in the block
      cy.clearCookies();
      })
    
  
  
    it('Login with Valid Test Data', () => {
      cy.login(Cypress.env('userid'),Cypress.env('password'))
    })

    it('Login with Invalid Test Data', () => {
      loginPage.navigateTo(Cypress.env('url'))
      loginPage.enterCredentials('invalid@email.com','P@ssw0rd')
      loginPage.validateErrorMessage()
      loginPage.shouldIncludeInUrl('/login')
 
    })


})