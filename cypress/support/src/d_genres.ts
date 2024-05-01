export class Genres{

    open_genres_page(){
        //click on genres in menu
        cy.get('[class="layout-menuitem-text ng-tns-c21-7"]').click()

    }

    create_new_genres(){
        cy.get('[class="p-button-label"]').contains('New').click()
        
    }

    edit_genres(){
        cy.get('[class="p-button-icon pi pi-pencil"]').click()
        
    }

    enable_disable_genres(){
        cy.get('[class="p-button-icon pi pi-circle"]').click()
        
    }

    delete_genres(){
        cy.get('[class="p-button-icon pi pi-trash"]').click()
        
    }

    sort_genres_by_id(){
        cy.get('[ng-reflect-field="id"]').click()
        
    }

    sort_genres_by_name(){
        cy.get('[ng-reflect-ng-class="[object Object]"]').click()
        
    }

    sort_genres_by_status(){
        cy.get('[ng-reflect-field="status"]').click()
        
    }

    click_angle_left(){
        cy.get('[class="p-paginator-icon pi pi-angle-left"]').click()
        
    }
    
    click_angle_double_left(){
        cy.get('[class="p-paginator-icon pi pi-angle-double-left"]').click()
        
    }

    click_angle_right(){
        cy.get('[class="p-paginator-icon pi pi-angle-right"]').click()
        
    }

    click_angle_double_right(){
        cy.get('[class="p-paginator-icon pi pi-angle-double-right"]').click()
        
    }

    click_page_dropdown(){
        cy.get('[class="p-dropdown-trigger ng-tns-c72-25"]').click()
        
    }

    click_10_on_page(){
        cy.get('[ng-reflect-label="10"]').click()
        
    }

    click_20_on_page(){
        cy.get('[ng-reflect-label="20"]').click()
        
    }

    click_30_on_page(){
        cy.get('[ng-reflect-label="30"]').click()
        
    }

    click_nth_page(){
        cy.get('[class="p-ripple p-element p-paginator-page p-paginator-element p-link ng-star-inserted"]').click()
        
    }
} 











