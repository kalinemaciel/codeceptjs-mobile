const { I } = inject();

module.exports = {

  button:{
    save:'~salvar'
  },

  loginSuccess() {
    I.waitForElement(this.button.save, 5)
    I.seeElement(this.button.save)
  }
}
