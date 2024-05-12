import { WebElements } from "./webElements";

const webElements = new WebElements();

export class MenuBar{
    click_on_menu_bar(){
        cy.get('[class="pi pi-bars"]').click()
    };
    click_on_calendar(){
        cy.get('[class="pi pi-calendar"]').click()
    };
    click_on_user(){
        cy.get('[class="pi pi-user"]').click()
    };
    click_on_cog(){
        cy.get('[class="pi pi-cog"]').click()
    };
}