class accountPage {
    welcomeHeader() {
        return cy.get('h1')
    }

}
module.exports = new accountPage();