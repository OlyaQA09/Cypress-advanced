import { GetElement } from "../Helpers/Page Objects/GetElement";
import { HomePage } from "../Helpers/Page Objects/homePage";

describe('Login to https://qauto.forstudy.space/', () => {

const homePage = new HomePage("https://qauto.forstudy.space/");
const getElement = new GetElement ();

beforeEach(()=> {
    homePage.navigateAndAuth();
})

    it('Login', () => (   // тут я тестую логін
        cy.visit("https://qauto.forstudy.space/", {
            auth: {
                username: "guest",
                password: "welcome2qauto"
            }
        })
    )); 

    it('availability of Sign up button', () => (
        getElement.signUpBtn.click(),
        cy.contains('Registration')
    ));

    it('ithillel.ua button check', () => (
        getElement.hillelBtn

    ));

   
})