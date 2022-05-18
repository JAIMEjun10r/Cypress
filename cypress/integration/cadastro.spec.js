import cadastro from '../support/pages/CadastroPage'
import login from '../support/pages/LoginPage'
describe('Novo usuário e Login com sucesso', function () {
    it.only('Cadastro de novo usuário com sucesso', function () {
        cadastro.go()
        cadastro.signinClick()
        cadastro.email_address()
        cadastro.btn_createAnaccount()
        cadastro.gender()
        cadastro.name_lastname('James', 'francisco')
        cadastro.password()
        cadastro.dateOfBirth()
        cadastro.checkbox()
        cadastro.company()
        cadastro.address1()
        cadastro.address2()
        cadastro.city()
        cadastro.state()
        cadastro.postal_code()
        cadastro.country()
        cadastro.phone()
        cadastro.mobile_phone()
        cadastro.address_alias()
        //cadastro.btn_register()
    });

    it('cadastro sem preencher first name', function () {
        cadastro.go()
        cadastro.signinClick()

    });
});