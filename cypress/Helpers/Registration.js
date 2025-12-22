import { HomePage } from "../Helpers/Page Objects/homePage";
import { GetElement } from "../Helpers/Page Objects/GetElement";
import { faker } from '@faker-js/faker';


export class Registration {

    #firstName = faker.person.firstName(6);
    #lastName = faker.person.lastName(6);
    #email = faker.internet.email();
    #password = faker.internet.password(18);
    constructor(url) {
        this.url = url;

    }

    register() {
        const homePage = new HomePage(this.url);
        const getElement = new GetElement();


        homePage.navigateAndAuth();
        getElement.signUpBtn.click();

        getElement.registrationName.click().type(this.#firstName),
        getElement.registrationLastName.click().type(this.#lastName),
        getElement.registrationEmail.click().type(this.#email),
        getElement.registrationPassword.click().type(this.#password),
        getElement.registrationReenterPassword.click().type(this.#password),
        getElement.registerBtn.click()
    }

    login() {
        const homePage = new HomePage(this.url);
        const getElement = new GetElement();

        homePage.navigateAndAuth();

        getElement.signInBtn.click(),
        getElement.signInEmail.click().type(this.#email),
        getElement.signInPassword.click().type(this.#password),
        getElement.loginBtn.click()
    }

    loginAPI() {
        return cy.request({
            method: 'POST',
            url: 'https://qauto.forstudy.space/api/auth/signin',
            body: {
                email: this.#email,
                password: this.#password,
                remember: false
            }
        })
    }
}