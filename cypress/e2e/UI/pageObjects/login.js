import Helper from '../helpers/generalhelper';

 export class Login extends Helper {
 //Locators

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

export const loginPage = new Login();
