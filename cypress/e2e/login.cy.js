import signInPage from '../support/page_objects/signIn.page';
import headerPage from '../support/page_objects/header.page';
import accountPage from '../support/page_objects/account.page';

describe('Login Test Suite', () => {
  beforeEach(() => {
    cy.visit('/')
    headerPage.btnSignIn().click()
  })

  it('can login with valid credentials', () => {
    signInPage.txtEmail().type('jim@jim.com')
    signInPage.txtPassword().type('JimJim1')
    signInPage.btnSignIn().click()
    accountPage.welcomeHeader().should('be.visible').and('have.text', 'Welcome to Your Account Jim!')
  })

  it('cannot login with invalid credentials', () => {
    signInPage.txtEmail().type('invalid@email.com')
    signInPage.txtPassword().type('invalidPassword')
    signInPage.btnSignIn().click()
    signInPage.invalidEmailOrPasswordAlert().should('be.visible').and('contain.text', 'Invalid email or password')
  })
})
