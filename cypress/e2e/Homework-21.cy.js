import { HW21Elements } from "../Helpers/Page Objects/Elements-for-HW-21";
import { Registration } from "../Helpers/Registration";

describe('Add car', () => {

  const hw21Elements = new HW21Elements();
  const registration = new Registration('https://qauto.forstudy.space/');
  let carId;

  before(() => {
    registration.register();
  })

  beforeEach(() => {
    registration.login()
  })

  it('Add Audi TT car and add fuel expenses', () => {
    cy.intercept({
      method: 'POST',
      url: '/api/cars',
    }).as('addCar')

    hw21Elements.addCarBtn.click()
    hw21Elements.mileageTextBox.click().type(50)
    cy.get('ngb-modal-window')
      .should('be.visible')
      .within(() => {
        cy.contains('button', 'Add').click()
      })

    cy.wait('@addCar').then(({ response }) => {
      expect(response.statusCode).to.eq(201)
      carId = response.body.data.id
      expect(carId).to.exist
      // Save carId to file so other tests can access it
      cy.writeFile('cypress/fixtures/carId.json', { carId })
    })
  })

  it('Check if Audi TT created through the API', () => {
    // Read carId saved by previous test
    cy.readFile('cypress/fixtures/carId.json').then(({ carId }) => {
      registration.loginAPI()
      cy.request('GET', 'https://qauto.forstudy.space/api/cars').then((response) => {
        expect(response.body.status).to.eq('ok')
        const ids = response.body.data.map(car => car.id)
        expect(ids).to.include(carId)
      })
    })
  })

  it('Expense creation through the API', () => {
    cy.readFile('cypress/fixtures/carId.json').then(({ carId }) => {
      registration.loginAPI().then(() => {
        cy.request({
          method: 'POST',
          url: 'https://qauto.forstudy.space/api/expenses',
          body: {
            carId: carId,
            reportedAt: new Date(),
            mileage: 113,
            liters: 11,
            totalCost: 120,
            forceMileage: false
          }
        }).then((response) => {
          expect(response.body.status).to.eq('ok')
          expect(response.body.data.carId).to.eq(carId)
          expect(response.body.data.mileage).to.eq(113)

          // Save the reported date for UI check
          cy.writeFile('cypress/fixtures/expenseDate.json', {
            date: new Date().toLocaleDateString('en-GB') // format: DD/MM/YYYY
          })
        })
      })
    })
  })

  it('Check if car exist on UI', () => {
    cy.get('.car-logo_img').should('exist')
    cy.get('.car_name.h2').should('exist').contains('Audi TT')
    cy.get('.btn.btn-white.btn-sidebar.sidebar_btn').contains('Fuel expenses').click()
    cy.get('.table.expenses_table')
      .should('contain', '113')
      .and('contain', '11L')
      .and('contain', '120.00 USD')
  })

  it('Add BMW 5 and add fuel expenses', () => {
    hw21Elements.addCarBtn.click()
    hw21Elements.addCarBrand.select('BMW').should('have.value', '1: 2')
    hw21Elements.addCarModel.select('5')
    hw21Elements.mileageTextBox.click().type(50)
    cy.get('ngb-modal-window')
      .should('be.visible')
      .within(() => {
        cy.contains('button', 'Add').click()
      })
    cy.get('ngb-modal-window').should('not.exist')

    hw21Elements.addFuelExpenseBtn.click()
    hw21Elements.addExpenseMileage.click().type(100)
    hw21Elements.numberOfLitersTextBox.click().type(1)
    hw21Elements.totalCostTextBox.click().type(2000)
    cy.get('ngb-modal-window')
      .should('be.visible')
      .within(() => {
        cy.contains('button', 'Add').click()
      })
    cy.get('ngb-modal-window').should('not.exist')
  })

  it('Add few cars and fuel expenses', () => {
    hw21Elements.addCarBtn.click()
    hw21Elements.addCarBrand.select('Audi')
    hw21Elements.addCarModel.select('A6')
    hw21Elements.mileageTextBox.click().type(50)
    cy.get('ngb-modal-window')
      .should('be.visible')
      .within(() => {
        cy.contains('button', 'Add').click()
      })
    cy.get('ngb-modal-window').should('not.exist')

    hw21Elements.addCarBtn.click()
    hw21Elements.addCarBrand.select('Porsche')
    hw21Elements.addCarModel.select('Panamera')
    hw21Elements.mileageTextBox.click().type(50)
    cy.get('ngb-modal-window')
      .should('be.visible')
      .within(() => {
        cy.contains('button', 'Add').click()
      })
    cy.get('ngb-modal-window').should('not.exist')

    hw21Elements.addFuelExpenseBtn.click()
    hw21Elements.addExpenseMileage.click().type(100)
    hw21Elements.numberOfLitersTextBox.click().type(1)
    hw21Elements.totalCostTextBox.click().type(2000)
    cy.get('ngb-modal-window')
      .should('be.visible')
      .within(() => {
        cy.contains('button', 'Add').click()
      })
    cy.get('ngb-modal-window').should('not.exist')
  })
})