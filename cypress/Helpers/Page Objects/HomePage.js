import { BasePage } from "./basePage";

export class HomePage extends BasePage {
    constructor(url) {
        super(url);
        this.url = url;
    }

    navigateAndAuth() {
        return cy.visit(this.url, {
            auth: {
                username: "guest",
                password: "welcome2qauto"
            }
        });
    }
}