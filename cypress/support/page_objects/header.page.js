class headerPage {
    btnSignIn() {
        return cy.get('[data-cy="sign-in"]')
    }

}
module.exports = new headerPage();