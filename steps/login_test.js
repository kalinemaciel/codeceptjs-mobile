Feature('login');

const { I, login_page } = inject()

Scenario('Login with success',  ({home_page}) => {

    login_page.doLogin('teste@teste.com', '123456')
    home_page.loginSuccess()

});

Scenario('Login with error',  () => {

    login_page.doLogin('erro@teste.com', '123456')
    login_page.loginError()
});
