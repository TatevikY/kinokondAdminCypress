import {Login} from '../support/src/a_login';
import { WebElements } from "../support/src/webElements";

const login = new Login();
const webElements = new WebElements();

before(() =>{
    login.login()
});

//TC check if after login following elements are present

it('Login',() => {

    webElements.dashboard_page_logo().should('be.visible')
    webElements.dashboard_page_KinoKond_text().contains('KinoKond').should('be.visible')
    webElements.dashboard_page_HomeMenu().contains('Home').should('be.visible')
    webElements.dashboard_page_Total_Users_text().should('be.visible').should('have.text','Total Users')
    webElements.dashboard_page_User_Icon().should('be.visible')

})