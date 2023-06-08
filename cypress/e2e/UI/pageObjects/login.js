import Helper from '../helpers/generalhelper';

 class Login extends Helper {
 //Locators

 getTitle(){
  return this.getSelector('.white')
 }

 getEmail(){
  return this.getSelector('input[name="email"]')

 }

 getPassword(){
  return this.getSelector('input[name="password"]')
  

 }
 
  getErrorMessage() {
    return this.getSelector('div.alert-danger i')
  }

  //Functions

  enterCredentials(email,password) {
    this.getEmail().type(email)
    this.getPassword().type(password)
    this.submit()
  }

  validateErrorMessage() {
    this.getErrorMessage().
    should('contain.text','Invalid Credentials')
  }

  
}

export default new Login();
