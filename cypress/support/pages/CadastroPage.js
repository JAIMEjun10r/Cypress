
class CadastroPage {
    go() {
        cy.viewport(1920, 1080);
        cy.visit('http://automationpractice.com/index.php');
        cy.title().should('include', 'My Store')
    }
    signinClick() {
        cy.get('.login').click();
        cy.get('#create-account_form > .form_content > p').should('have.text', 'Please enter your email address to create an account.');
    }
    email_address() {
        cy.get('#email_create').type('akak1@gmail.com')
    }
    btn_createAnaccount() {
        cy.get('#SubmitCreate > span').click();
        cy.wait(6000);
    }
    personal_information() {
        cy.get('#id_gender1').click();
        cy.get(':nth-child(1) > .page-subheading').should('have.text', 'Your personal information')
        cy.get('#customer_firstname').type('Krebinho');
        cy.get('#customer_lastname').type('Krebiano');
        cy.get('#passwd').type('12345');
        cy.get('[id="days"]').select('1');
        cy.get('[id="months"]').select('5');
        cy.get('[id="years"]').select('1990');
        cy.get('#newsletter').check();
        cy.get('#optin').check();
    }
    your_address() {
        cy.get(':nth-child(2) > .page-subheading').should('have.text', 'Your address');
        cy.get('#company').type('CEOCypress');
        cy.get('#address1').type('Rua dos afogados, n2, Bairro Francisco');
        cy.get('#address2').type('rua dos pudins, n4, bairro Capim');
        cy.get('#city').type('Lagarto');
        cy.get('[id="id_state"]').select(2);
        cy.get('#postcode').type('20202020')
        cy.get('#phone').type('27736599');
        cy.get('#phone_mobile').type('21999991234');
        cy.get('input[id="alias"]').clear().type('TheOne');
    }
    btn_register() {
        cy.get('#submitAccount > span').click();
    }
}
export default new CadastroPage()