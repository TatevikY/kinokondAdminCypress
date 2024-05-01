//TODO create tests for menu abr, calendar, user icon and settings
import {Login} from '../support/src/a_login';
import { MenuBar } from '../support/src/b_menuBar';

const login = new Login();
const menuBar = new MenuBar();

beforeEach(() =>{
    login.login()
});

//TC check if menu bar items are present, clickable and are forwarding to expected pages
it('bar check', () => {
    cy.get('.ng-tns-c21-4.layout-root-menuitem > .layout-menuitem-root-text')
        .contains('Home')
        .should('be.visible')
    menuBar.click_on_menu_bar()
    cy.get('.ng-tns-c21-4.layout-root-menuitem > .layout-menuitem-root-text')
        .contains('Home')
        .should('not.be.visible')

})
/*
it('calendar', () => {

})

it('user icon', () => {

})

it('settings icon', () => {

})*/