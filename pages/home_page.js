const { I } = inject();

module.exports = {

  button:{
    save:'~salvar',
    cancel: '~cancelar',
  },

  fields:{
    code:'~codigo',
    name:'~aluno',
    search: '~search'
  },

  warnings:{
    save: 'Dados salvos!'
  },

  loginSuccess() {
    I.waitForElement(this.button.save, 5)
    I.seeElement(this.button.save)
  },

  registerStudent(code, name) {
    I.fillField(this.fields.code, code)
    I.fillField(this.fields.name, name)
    I.tap(this.button.save)
    I.seeElement(this.warnings.save)
  },

  searchStudent(search, check){
    I.fillField(this.fields.search, search)
    I.seeElement('//android.view.ViewGroup[@content-desc="' + check + '"]')
  }
}
