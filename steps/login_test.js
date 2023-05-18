Feature('LOGIN');

const { I, login_page, scroll_page } = inject()

BeforeSuite(() => {
    console.log('Suite')
})

Before(() => {
    console.log('Scenario')
})

AfterSuite(() => {
    console.log('Suite')
})

After(() => {
    console.log('Scenario')
})

Scenario('login with correct credentials',  ({home_page}) => {
    login_page.doLogin('teste@teste.com', '123456')
    home_page.loginSuccess()
    scroll_page.doScroll()
});

Scenario('login with wrong password',  () => {
    login_page.doLogin('teste@teste.com', '1234')
    login_page.loginError()
});

Scenario('login with wrong email',  () => {
    login_page.doLogin('erro@teste.com', '123456')
    login_page.loginError()
});