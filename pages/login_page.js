const { I } = inject();

module.exports = {

  fields:{
    email:'~email',
    password: '~senha'
  },

  buttons: {
    enter: '~entrar'
  },

  message: {
    error: '~lognFail'
  },

  doLogin(email, password) {
    I.fillField(this.fields.email, email)
    I.fillField(this.fields.password, password)
    I.tap(this.buttons.enter)
  },

  loginError() {
    I.waitForElement(this.message.error, 5)
    I.seeElement(this.message.error)
  }
}
