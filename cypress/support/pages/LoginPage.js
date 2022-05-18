class LoginPage {
    go() {
        cy.viewport(1920, 1080);
        cy.visit('http://automationpractice.com/index.php');
        cy.title().should('include', 'My Store')
    }
    signinClick() {
        cy.get('.login').click();
        cy.get('#create-account_form > .form_content > p').should('have.text', 'Please enter your email address to create an account.');
    
    }

}
export default new LoginPage
