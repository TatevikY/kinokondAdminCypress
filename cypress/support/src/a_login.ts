import { WebElements } from "./webElements";

const webElements = new WebElements();

export class Login{
    baseURL: string = 'http://localhost:4200/';
    username: string = 'tatevikyyy';
    pwd: string = 'Test123!';

    login(){
        cy.visit(this.baseURL)
        webElements.login_page_username().clear().type(this.username)
        webElements.login_page_password().clear().type(this.pwd).type('{enter}')
    }
};
