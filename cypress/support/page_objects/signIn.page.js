class signInPage {
    txtEmail() {
        return cy.get('#email')
    }

    txtPassword() {
        return cy.get('#password')
    }

    btnSignIn() {
        return cy.get('[type="submit"]')
    }

    invalidEmailOrPasswordAlert() {
        return cy.get('.alert')
    }

}
module.exports = new signInPage();