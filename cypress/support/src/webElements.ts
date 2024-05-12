export class WebElements{

/**template
import { WebElements } from "./webElements";

const webElements = new WebElements();

    method_name(){
        return cy.get('[webelement]')
    
    }
**/

//*********************************************************************LOGIN PAGE ELEMENTS******************************* */
//***********************Action web elements******************************* */
    login_page_username(){
        return cy.get('#username') 
    }

    login_page_password(){
        return cy.get('[type="password"]') 
    }
//***********************Assertion web elements******************************* */
    dashboard_page_logo(){
        return cy.get('[alt="logo"]')
    }

    dashboard_page_KinoKond_text(){
        return cy.get('[class="layout-topbar-logo"]')
    }

    dashboard_page_HomeMenu(){
        return cy.get('[class="layout-menuitem-root-text ng-tns-c1994615527-4 ng-star-inserted"]')  
    }

    dashboard_page_Total_Users_text(){
        return cy.get('[class="block text-500 font-medium text-cyan-900"]')
    }

    dashboard_page_User_Icon(){
        return cy.get('[class="pi pi-user"]')
    }
//***********************************************************************END***************************************************************** */

//*********************************************************************MENU BAR PAGE ELEMENTS******************************* */
//***********************Action web elements******************************* */
    menuBarP_menu_bar(){
        return cy.get('[class="pi pi-bars"]')
    }
    menuBarP_calendar(){
        return cy.get('[class="pi pi-calendar"]')
    }
    menuBarP_user(){
        return cy.get('[class="pi pi-user"]')
    }
    menuBarP_cog(){
        return cy.get('[class="pi pi-cog"]')
    }
//***********************Assertion web elements******************************* */

//*********************************************************************END************************************************** */

//*********************************************************************DASHBOARD PAGE ELEMENTS******************************* */
//***********************Action web elements********************************** */
//***********************Assertion web elements******************************* */
//*********************************************************************END*********************************************** */

//*********************************************************************GENRES PAGE ELEMENTS******************************* */
//***********************Action web elements********************************** */
    genres_page_genres_menu_item(){
        return cy.get('[class="layout-menuitem-text ng-tns-c21-7"]')
    }
    genres_page_new_button(){
        return cy.get('[class="p-button-label"]').contains('New')

    }
    genres_page_new_genres_inputText(){
        return cy.get('[id="inputtext"]')

    }
    genres_page_new_genres_SAVE_button(){
        return cy.get('[class="p-button-label"]').contains('Save')

    }
    genres_page_new_genres_CANCEL_button(){
        return cy.get('[class="p-button-label"]').contains('Cancel')

    }
    genres_page_edit_button(){
        return cy.get('[class="p-button-icon pi pi-pencil"]')

    }
    genres_page_enable_disable_genres_button(){
        return cy.get('[class="p-button-icon pi pi-circle"]')

    }
    genres_page_delete_genres_button(){
        return cy.get('[class="p-button-icon pi pi-trash"]')

    }
    
    genres_page_sort_genres_by_id(){
        return cy.get('[ng-reflect-field="id"]')

    }
    genres_page_sort_genres_by_name(){
        return cy.get('[ng-reflect-ng-class="[object Object]"]')

    }
    genres_page_sort_genres_by_status(){
        return cy.get('[ng-reflect-field="status"]')

    }
    genres_page_click_angle_left(){
        return cy.get('[class="p-paginator-icon pi pi-angle-left"]')

    }
    genres_page_click_angle_double_left(){
        return cy.get('[class="p-paginator-icon pi pi-angle-double-left"]')

    }
    genres_page_click_angle_right(){
        return cy.get('[class="p-paginator-icon pi pi-angle-right"]')

    }
    genres_page_click_angle_double_right(){
        return cy.get('[class="p-paginator-icon pi pi-angle-double-right"]')

    }
    genres_page_click_page_dropdown(){
        return cy.get('[class="p-dropdown-trigger ng-tns-c72-25"]')

    }
    genres_page_click_10_on_page(){
        return cy.get('[ng-reflect-label="10"]')

    }
    genres_page_click_20_on_page(){
        return cy.get('[ng-reflect-label="20"]')

    }
    genres_page_click_30_on_page(){
        return cy.get('[ng-reflect-label="30"]')

    }
    genres_page_click_nth_page(){
        return cy.get('[class="p-ripple p-element p-paginator-page p-paginator-element p-link ng-star-inserted"]')

    }
    
    //***********************Assertion web elements******************************* */

//*********************************************************************END*********************************************** */

//*********************************************************************CATEGORIES PAGE ELEMENTS******************************* */
//***********************Action web elements********************************** */
//***********************Assertion web elements******************************* */
//*********************************************************************END*********************************************** */

//*********************************************************************SUBCATEGORIES PAGE ELEMENTS******************************* */
//***********************Action web elements********************************** */
//***********************Assertion web elements******************************* */
//*********************************************************************END*********************************************** */

//*********************************************************************PRODUCTION COMPANIES PAGE ELEMENTS******************************* */
//***********************Action web elements********************************** */
//***********************Assertion web elements******************************* */
//*********************************************************************END*********************************************** */

//*********************************************************************PERSONS PAGE ELEMENTS******************************* */
//***********************Action web elements********************************** */
//***********************Assertion web elements******************************* */
//*********************************************************************END*********************************************** */

//*********************************************************************PLANS PAGE ELEMENTS******************************* */
//***********************Action web elements********************************** */
//***********************Assertion web elements******************************* */
//*********************************************************************END*********************************************** */

//*********************************************************************MANAGE USERS PAGE ELEMENTS******************************* */
//***********************Action web elements********************************** */
//***********************Assertion web elements******************************* */
//*********************************************************************END*********************************************** */

//*********************************************************************ALL USERS PAGE ELEMENTS******************************* */
//***********************Action web elements********************************** */
//***********************Assertion web elements******************************* */
//*********************************************************************END*********************************************** */

//*********************************************************************ACTIVE PAGE ELEMENTS******************************* */
//***********************Action web elements********************************** */
//***********************Assertion web elements******************************* */
//*********************************************************************END*********************************************** *//

//*********************************************************************BANNED USERS PAGE ELEMENTS******************************* */
//***********************Action web elements********************************** */
//***********************Assertion web elements******************************* */
//*********************************************************************END*********************************************** */

//*********************************************************************EMAIL UNVERFIED USERS PAGE ELEMENTS******************************* */
//***********************Action web elements********************************** */
//***********************Assertion web elements******************************* */
//*********************************************************************END*********************************************** */

//*********************************************************************PHONE UNVERFIED USERS PAGE ELEMENTS******************************* */
//***********************Action web elements********************************** */
//***********************Assertion web elements******************************* */
//*********************************************************************END*********************************************** */

//*********************************************************************NOTIFICATION TO ALL PAGE ELEMENTS******************************* */
//***********************Action web elements********************************** */
//***********************Assertion web elements******************************* */
//*********************************************************************END*********************************************** */
}
