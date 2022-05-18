
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
        cy.get('#email_create').type('akak121@gmail.com')
    }
    
    btn_createAnaccount() {
        cy.get('#SubmitCreate > span').click();
        cy.wait(6000);
    }
    
    gender() {
        cy.get('#id_gender1').click();
        cy.get(':nth-child(1) > .page-subheading').should('have.text', 'Your personal information')
    }
    
    name_lastname(name, last_name) {
        cy.get('#customer_firstname').type(name);
        cy.get('#customer_lastname').type(last_name);
    };
    
    password() {
        cy.get('#passwd').type('12345');
    }
    
    dateOfBirth() {
        cy.get('[id="days"]').select('1');
        cy.get('[id="months"]').select('5');
        cy.get('[id="years"]').select('1990');
        
    }
    checkbox() {
        cy.get('#newsletter').check();
        cy.get('#optin').check();
        cy.get(':nth-child(2) > .page-subheading').should('have.text', 'Your address');
    }
    company() {
        cy.get('#company').type('CEOCypress');
    }
                
    address1() {
        cy.get('#address1').type('Rua dos frangos');    
    }

    address2() {
        cy.get('#address2').type('n330, apartamento 2');
    }

    city(){
        cy.get('#city').type('Lagarto');
    }
    
    state(){
        cy.get('[id="id_state"]').select(2);
    } 
    postal_code(){
        cy.get('#postcode').type('20202020');
    } 
    country() {
        cy.get('[id="id_country"]').select('21')
    
    }
    phone() {
        cy.get('#phone').type('27736599');
    }

    mobile_phone() {
        cy.get('#phone_mobile').type('21999991234');
    }
    
    address_alias() {
        cy.get('input[id="alias"]').clear().type('TheOne');
    }

    btn_register() {
        cy.get('#submitAccount > span').click();
    }
}

export default new CadastroPage()