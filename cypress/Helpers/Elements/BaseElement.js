export class BaseElement{
    getElement(selector){
        return cy.get(selector);
    }
}