export default class generalHelper {
navigateTo(url){
   cy.visit(url)
   
}

    isContentVisible(message) {
      return cy.contains(message).should('be.visible');
    }
  
    isDataTestElementDisabled(key) {
      this.getByTestId(key).should('be.disabled');
    }
  
    clickByText(text) {
      this.getByText(text).click();
    }
   
    submit() {
      cy.get('button[type="submit"]').click();
    }
  
    clearField(selector) {
      cy.get(selector).clear();
    }
  
    typeTextInElement(selector, data) {
      cy.get(selector).type(data);
    }

  
  
    shouldIncludeInUrl(url) {
      return cy.url().should('include', url);
    }
  
    scrollElementToBottom(key) {
      return cy.get(`[data-testid="${key}"]`).children().scrollTo('bottom');
    }
  
    getByTestId(key) {
      return cy.get(`[data-testid="${key}"]`);
    }
  
    checkTextByTitle(text) {
      return cy.title(text).should('eq', text);
    }
  
    getByDataContent(key) {
      return cy.get(`[data-content="${key}"]`);
    }
  
    checkIfContentExists(text) {
      this.getByDataContent(text).should('be.visible');
    }
  
    updateTextInElement(key, data) {
      cy.get(`[data-testid="${key}"]`).clear();
      cy.get(`[data-testid="${key}"]`).type(data);
    }
  
    getSelector(selector) {
      return cy.get(selector);
    }

    
  
    getH1(text) {
      cy.get('h1').should('contain', text);
    }
  
    getById(key) {
      return cy.get(`span[id="${key}"]`);
    }
  
    getByText(text) {
      return cy.contains(text);
    }
  
    clickToggleButton() {
      cy.get('[data-testid=toggle-button]').click({ multiple: true });
    }
  
    getElementValueFromTable(text) {
      return cy.get('table').contains('td', text);
    }
  
    getValueOfIndexFromTable(index, text) {
      return cy.get('tbody>tr').eq(index).should('contain', text);
    }
  
    getValueOfHeaderIndexFromTable(index, text) {
      return cy.get('thead>tr>th').eq(index).should('contain', text);
    }
  
    isErrorMessageVisible(message) {
      cy.contains(message).should('be.visible');
    }
  
    getByInputId(key) {
      return cy.get(`input[id="${key}"]`).check();
    }
  }
  