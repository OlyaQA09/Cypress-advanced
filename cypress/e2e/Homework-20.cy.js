import { GetElement } from "../Helpers/Page Objects/GetElement";
import { HomePage } from "../Helpers/Page Objects/homePage";
import { faker } from '@faker-js/faker';

describe('Testing Name field', () => {

    const homePage = new HomePage("https://qauto.forstudy.space/");
    const getElement = new GetElement();

    beforeEach(() => {
        homePage.navigateAndAuth();
        getElement.signUpBtn.click();

    })

    it('Registration name test - empty field', () => (
        getElement.registrationName.click(),
        getElement.outClick.click(),
        cy.contains("Name required"),
        getElement.registrationName.should('have.css', 'border-color', 'rgb(220, 53, 69)')

    ));
    it('Registration name test - wrong data', () => (
        getElement.registrationName
            .click()
            .type(1234),
        getElement.outClick.click(),
        cy.contains("Name is invalid"),
        getElement.registrationName.should('have.css', 'border-color', 'rgb(220, 53, 69)')


    ));
    it('Registration name test - wrong lenth', () => (
        getElement.registrationName.click()
            .type("a"),
        getElement.outClick.click(),
        cy.contains("Name has to be from 2 to 20 characters long"),
        getElement.registrationName.should('have.css', 'border-color', 'rgb(220, 53, 69)')


    ));
    it('Registration name test - wrong lenth', () => (
        getElement.registrationName.click()
            .type("abcdefghijklmnopqrstuvw"),
        getElement.outClick.click(),
        cy.contains("Name has to be from 2 to 20 characters long"),
        getElement.registrationName.should('have.css', 'border-color', 'rgb(220, 53, 69)')

    ));
    it('Registration name test - positive check', () => (
        getElement.registrationName.click()
            .type("Ivan"),
        getElement.registrationName.should('have.css', 'border-color', 'rgb(92, 179, 253)')

    ));


})

describe("Testing Last Name field", () => {

    const homePage = new HomePage("https://qauto.forstudy.space/");
    const getElement = new GetElement();

    beforeEach(() => {
        homePage.navigateAndAuth();
        getElement.signUpBtn.click();
    })

    it('Registration Last name test - empty field', () => (
        getElement.registrationLastName.click(),
        getElement.outClick.click(),
        cy.contains("Last name required"),
        getElement.registrationLastName.should('have.css', 'border-color', 'rgb(220, 53, 69)')

    ));
    it('Registration Last name test - wrong data', () => (
        getElement.registrationLastName
            .click()
            .type(1234),
        getElement.outClick.click(),
        cy.contains("Last name is invalid"),
        getElement.registrationLastName.should('have.css', 'border-color', 'rgb(220, 53, 69)')


    ));
    it('Registration Last name test - wrong lenth', () => (
        getElement.registrationLastName.click()
            .type("a"),
        getElement.outClick.click(),
        cy.contains("Last name has to be from 2 to 20 characters long"),
        getElement.registrationLastName.should('have.css', 'border-color', 'rgb(220, 53, 69)')


    ));
    it('Registration Last name test - wrong lenth', () => (
        getElement.registrationLastName.click()
            .type("abcdefghijklmnopqrstuvw"),
        getElement.outClick.click(),
        cy.contains("Last name has to be from 2 to 20 characters long"),
        getElement.registrationLastName.should('have.css', 'border-color', 'rgb(220, 53, 69)')

    ));
    it('Registration Last name test - positive check', () => (
        getElement.registrationLastName.click()
            .type("Petrenko"),
        getElement.registrationLastName.should('have.css', 'border-color', 'rgb(92, 179, 253)')

    ));

})

describe("Testing Email field", () => {

    const homePage = new HomePage("https://qauto.forstudy.space/");
    const getElement = new GetElement();

    beforeEach(() => {
        homePage.navigateAndAuth();
        getElement.signUpBtn.click();
    })

    it('Registration Email test - empty field', () => (
        getElement.registrationEmail.click(),
        getElement.outClick.click(),
        cy.contains("Email required"),
        getElement.registrationEmail.should('have.css', 'border-color', 'rgb(220, 53, 69)')

    ));
     it('Registration Email test - wrong data', () => (
        getElement.registrationEmail.click()
        .type("abcd"),
        getElement.outClick.click(),
        cy.contains("Email is incorrect"),
        getElement.registrationEmail.should('have.css', 'border-color', 'rgb(220, 53, 69)')

    ));
     it('Registration Email test - positive check', () => (
        getElement.registrationEmail.click()
        .type("abcdtestingexample@test.ui"),
        getElement.registrationEmail.should('have.css', 'border-color', 'rgb(92, 179, 253)')

    ));

})

describe("Testing Password field", () => {

    const homePage = new HomePage("https://qauto.forstudy.space/");
    const getElement = new GetElement();

    beforeEach(() => {
        homePage.navigateAndAuth();
        getElement.signUpBtn.click();
    })

    it('Registration Password test - empty field', () => (
        getElement.registrationPassword.click(),
        getElement.outClick.click(),
        cy.contains("Password required"),
        getElement.registrationPassword.should('have.css', 'border-color', 'rgb(220, 53, 69)')

    ));
    it('Registration Password test - wrong data', () => (
        getElement.registrationPassword.click()
        .type("abcd"),
        getElement.outClick.click(),
        cy.contains("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"),
        getElement.registrationPassword.should('have.css', 'border-color', 'rgb(220, 53, 69)')

    ));    
    it('Registration Password test - positive check', () => (
        getElement.registrationPassword.click()
            .type("abcdefj1!A"),
        getElement.registrationPassword.should('have.css', 'border-color', 'rgb(92, 179, 253)')

    ));

})

describe("Testing Re-enter Password field", () => {

    const homePage = new HomePage("https://qauto.forstudy.space/");
    const getElement = new GetElement();

    beforeEach(() => {
        homePage.navigateAndAuth();
        getElement.signUpBtn.click();
    })

    it('Registration Re-enter Password test - empty field', () => (
        getElement.registrationReenterPassword.click(),
        getElement.outClick.click(),
        cy.contains("Re-enter password required"),
        getElement.registrationReenterPassword.should('have.css', 'border-color', 'rgb(220, 53, 69)')

    ));
    it('Registration Re-enter Password test - passwords do not match', () => (
        getElement.registrationPassword.click()
            .type("abcdefj1!A"),
        getElement.registrationPassword.should('have.css', 'border-color', 'rgb(92, 179, 253)'),
        getElement.registrationReenterPassword.click()
            .type("abcdefj1!B"),
        getElement.outClick.click(),
        cy.contains("Passwords do not match"),
        getElement.registrationReenterPassword.should('have.css', 'border-color', 'rgb(220, 53, 69)')

    ));    
    it('Registration Re-enter Password test - passwords are match', () => (
        getElement.registrationPassword.click()
            .type("abcdefj1!A"),
        getElement.registrationPassword.should('have.css', 'border-color', 'rgb(92, 179, 253)'),
        getElement.registrationReenterPassword.click()
            .type("abcdefj1!A"),
        getElement.registrationReenterPassword.should('have.css', 'border-color', 'rgb(92, 179, 253)'),
        getElement.registerBtn.should('be.disabled')

    ));    

})

describe("Registration", () => {

    const homePage = new HomePage("https://qauto.forstudy.space/");
    const getElement = new GetElement();
    const firstName = faker.person.firstName(6);
    const lastName = faker.person.lastName(6);
    const email = faker.internet.email();
    const password = faker.internet.password(18);

    beforeEach(() => {
        homePage.navigateAndAuth();
    })

    it('User creation', () => (
        getElement.signUpBtn.click(),
        getElement.registrationName.click().type(firstName),
        getElement.registrationLastName.click().type(lastName),
        getElement.registrationEmail.click().type(email),
        getElement.registrationPassword.click().type(password),
        getElement.registrationReenterPassword.click().type(password),
        getElement.registerBtn.click()
    ));    

    it('Sign in', ()=> (
        getElement.signInBtn.click(),
        getElement.signInEmail.click().type(email),
        getElement.signInPassword.click().type(password),
        getElement.loginBtn.click(),
        cy.contains('.alert alert-danger', 'Wrong email or password').should('not.exist')
    ))

})



