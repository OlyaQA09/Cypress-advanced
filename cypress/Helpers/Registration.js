import { HomePage } from "../Helpers/Page Objects/homePage";
import { GetElement } from "../Helpers/Page Objects/GetElement";
import { faker } from '@faker-js/faker';


export class Registration{
constructor(url){
    this.url = url;
}

register(){
    const homePage = new HomePage(this.url);
        const getElement = new GetElement();
        const firstName = faker.person.firstName(6);
        const lastName = faker.person.lastName(6);
        const email = faker.internet.email();
        const password = faker.internet.password(18);

 homePage.navigateAndAuth();
        getElement.signUpBtn.click();
        
        getElement.registrationName.click().type(firstName),
        getElement.registrationLastName.click().type(lastName),
        getElement.registrationEmail.click().type(email),
        getElement.registrationPassword.click().type(password),
        getElement.registrationReenterPassword.click().type(password),
        getElement.registerBtn.click()

}
}