import cadastro from '../support/pages/CadastroPage'
import login from '../support/pages/LoginPage'
describe('Novo usuário e Login com sucesso', function () {
    it('Cadastro de novo usuário com sucesso', function () {
        cadastro.go()
        cadastro.signinClick()
        cadastro.email_address()
        cadastro.btn_createAnaccount()
        cadastro.personal_information()
        cadastro.your_address()
        cadastro.btn_register()
    });

    it.only('Cadastro de usuário sem preencher dados obrigatórios', function () {
        cadastro.go()
        cadastro.signinClick()
    });
});