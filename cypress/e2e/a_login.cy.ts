import {Login} from '../support/src/a_login';

const login = new Login();

beforeEach(() =>{
    login.login()
});

//TC check if after login following elements are present

it('Login',() => {
    //logo
    cy.get('[alt="logo"]')
        .should('be.visible')
    cy.get('[class="layout-topbar-logo"]')
        .contains('KinoKond')
        .should('be.visible')
    //Home
    cy.get('.ng-tns-c21-4.layout-root-menuitem > .layout-menuitem-root-text')
        .contains('Home')
        .should('be.visible')
    //Total users
    cy.get('[class="block text-500 font-medium text-cyan-900"]')
        .should('be.visible')
        .should('have.text','Total Users')
    //User icon/menu
    cy.get('[class="pi pi-user"]')
        .should('be.visible')

})