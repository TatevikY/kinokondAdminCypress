import {Login} from '../support/src/login';
    
const login = new Login();

beforeEach(() =>{
    login.login()
});

it('Logo presence',() => {
    cy.get('[alt="logo"]')
        .should('be.visible');
})
it('Menu bar presence',() => {
    cy.get('.ng-tns-c21-4.layout-root-menuitem > .layout-menuitem-root-text')
        .contains('Home')
        .should('be.visible');
})
it('Metrics presence',() => {
    cy.get('[class="block text-500 font-medium text-cyan-900"]')
        .should('be.visible')
        .should('have.text','Total Users');
})
it('User toggle presence',() => {
    cy.get('[class="pi pi-user"]')
        .should('be.visible');
})