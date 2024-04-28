export class Genres{
   /* baseURL: string = 'http://localhost:4200/';*/
    
    open_genres_page(){
        cy.get('[class="layout-menuitem-text ng-tns-c21-7"]').click()

    }
/*
    create_new_genres(){
        cy.visit(this.baseURL)
        
    }

    edit_genres(){
        cy.visit(this.baseURL)
        
    }

    enable_disable_genres(){
        cy.visit(this.baseURL)
        
    }

    delete_genres(){
        cy.visit(this.baseURL)
        
    }*/

    sort_genres_by_id(){
        cy.get('[ng-reflect-field="id"]').click()
        
    }
} 
