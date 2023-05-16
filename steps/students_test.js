Feature('Students');

const { I, login_page, home_page } = inject()

Scenario('Add student with success',  ({ I }) => {

    const code = '6661'
    const name = 'Kaline Maciel'

    login_page.doLogin('teste@teste.com', '123456')
    home_page.registerStudent(code, name)
    home_page.searchStudent(name, code)
});
