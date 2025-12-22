import { HW21Elements } from "../Helpers/Page Objects/Elements-for-HW-21";
import { Registration } from "../Helpers/Registration";




describe('Add car', () => {

  const hw21Elements = new HW21Elements();
  const registration = new Registration('https://qauto2.forstudy.space/');

  beforeEach(() => {
    registration.register()
  })


  it('Add Audi TT car and add fuel expenses', () => (
    hw21Elements.addCarBtn.click(),
    hw21Elements.mileageTextBox.click().type(50),
    cy.get('ngb-modal-window')
      .should('be.visible')
      .within(() => {
        cy.contains('button', 'Add').click()
      }), //hw21Elements.btnAddInPopup.click(),
    hw21Elements.addFuelExpenseBtn.click(),
    hw21Elements.addExpenseMileage.click().type(100),
    hw21Elements.numberOfLitersTextBox.click().type(1),
    hw21Elements.totalCostTextBox.click().type(2000),
    cy.get('ngb-modal-window')
      .should('be.visible')
      .within(() => {
        cy.contains('button', 'Add').click()
      }) //hw21Elements.addButtonInExpensePopup.click()
  ))

  it('Add BMW 5 and add fuel expenses', () => (
    hw21Elements.addCarBtn.click(),
    hw21Elements.addCarBrand.select('BMW').should('have.value', '1: 2'),
    hw21Elements.addCarModel.select('5'),
    hw21Elements.mileageTextBox.click().type(50),
    cy.get('ngb-modal-window')
      .should('be.visible')
      .within(() => {
        cy.contains('button', 'Add').click()
      }),
    hw21Elements.addFuelExpenseBtn.click(),
    hw21Elements.addExpenseMileage.click().type(100),
    hw21Elements.numberOfLitersTextBox.click().type(1),
    hw21Elements.totalCostTextBox.click().type(2000),
    cy.get('ngb-modal-window')
      .should('be.visible')
      .within(() => {
        cy.contains('button', 'Add').click()
      })
  ))

  it('Add few cars and fuel expenses', () => (
    hw21Elements.addCarBtn.click(),
    hw21Elements.addCarBrand.select('Audi'),
    hw21Elements.addCarModel.select('A8'),
    hw21Elements.mileageTextBox.click().type(50),
    cy.get('ngb-modal-window')
      .should('be.visible')
      .within(() => {
        cy.contains('button', 'Add').click()
      }),
    cy.get('ngb-modal-window').should('not.exist'),


    hw21Elements.addCarBtn.click(),
    hw21Elements.addCarBrand.select('BMW'),
    hw21Elements.addCarModel.select('5'),
    hw21Elements.mileageTextBox.click().type(50),
    cy.get('ngb-modal-window')
      .should('be.visible')
      .within(() => {
        cy.contains('button', 'Add').click()
      }),
      


    hw21Elements.addFuelExpenseBtn.click(),
    hw21Elements.addExpenseMileage.click().type(100),
    hw21Elements.numberOfLitersTextBox.click().type(1),
    hw21Elements.totalCostTextBox.click().type(2000),
    cy.get('ngb-modal-window')
      .should('be.visible')
      .within(() => {
        cy.contains('button', 'Add').click()
      })

  ))



})