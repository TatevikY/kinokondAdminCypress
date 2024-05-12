import { WebElements } from "./webElements";

const webElements = new WebElements();

export class Genres{
    
    open_genres_page(){
        webElements.genres_page_genres_menu_item().click()
    }

    public genresName:string =  'createNewGenres'

    create_new_genres_click_yes(){
        webElements.genres_page_new_button().click()
        webElements.genres_page_new_genres_inputText().clear().type(this.genresName)
        webElements.genres_page_new_genres_SAVE_button().click()
    }

    create_new_genres_click_no(){
        webElements.genres_page_new_button().click()
        webElements.genres_page_new_genres_inputText().clear().type(this.genresName)
        webElements.genres_page_new_genres_CANCEL_button().click()
    }

    genres_bulk_add(j){
        for (let i = 1; i <= j; i++) {
            this.open_genres_page()
            this.create_new_genres_click_yes()
            webElements.genres_page_new_genres_inputText().clear().type('NewGenresToEdit' +i)
            webElements.genres_page_new_genres_SAVE_button().click()
            cy.reload()
       }
    }

    edit_genres(){
        webElements.genres_page_edit_button().click()
        
    }

    enable_disable_genres(){
        webElements.genres_page_enable_disable_genres_button().click()
        
    }

    delete_genres(){
        webElements.genres_page_delete_genres_button().click()
        
    }

    sort_genres_by_id(){
        webElements.genres_page_sort_genres_by_id().click()
        
    }

    sort_genres_by_name(){
        webElements.genres_page_sort_genres_by_name().click()
        
    }

    sort_genres_by_status(){
        webElements.genres_page_sort_genres_by_status().click()
        
    }

    click_angle_left(){
        webElements.genres_page_click_angle_left().click()
        
    }
    
    click_angle_double_left(){
        webElements.genres_page_click_angle_double_left().click()
        
    }

    click_angle_right(){
        webElements.genres_page_click_angle_right().click()
        
    }

    click_angle_double_right(){
        webElements.genres_page_click_angle_double_right().click()
        
    }

    click_page_dropdown(){
        webElements.genres_page_click_page_dropdown().click()
        
    }

    click_10_on_page(){
        webElements.genres_page_click_10_on_page().click()
        
    }

    click_20_on_page(){
        webElements.genres_page_click_20_on_page().click()
        
    }

    click_30_on_page(){
        webElements.genres_page_click_30_on_page().click()
        
    }

    click_nth_page(){
        webElements.genres_page_click_nth_page().click()
        
    }
} 