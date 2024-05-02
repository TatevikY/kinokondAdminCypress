import {Login} from '../support/src/a_login';
import {Genres} from '../support/src/d_genres'; 

const login = new Login();
const genres = new Genres();

beforeEach(() =>{
     cy.task("connectDB", 'delete from genres')
     login.login()
     genres.open_genres_page()
})

it('Create new genres', () =>{
     let genresName = Date().toLocaleUpperCase()
     genres.create_new_genres()
     cy.get('[id="inputtext"]').clear().type(genresName)
     cy.get('[class="p-button-label"]').contains('Save').click()
     cy.get('table').contains('td',genresName).should('exist')
})

it('Create new genres and click cancel', () =>{
     genres.create_new_genres()
     cy.get('[id="inputtext"]').clear().type('cancelTest')
     cy.get('[class="p-button-label"]').contains('Cancel').click()
     cy.get('table').contains('td','cancelTest').should('not.exist')
})

it('Create new genres and edit it', () => {
     genres.create_new_genres()
     cy.get('[id="inputtext"]').clear().type('NewGenresToEdit')
     cy.get('[class="p-button-label"]').contains('Save').click()
     
     cy.reload()

     cy.get('table').contains('td','NewGenresToEdit').get('[class="p-element p-button-rounded p-button-success mr-2 p-button p-component p-button-icon-only"]')
                                                       .click()
     cy.get('[class="p-overflow-hidden"]').get('[id="inputtext"]').clear().type('EditedGenres')
     cy.get('[class="p-button-label"]').contains('Save').click()
     
     cy.reload()

     cy.get('table').contains('td','NewGenresToEdit').should('not.exist')
     cy.get('table').contains('td','EditedGenres').should('exist')
})

it('Create new and enable', () => {
     genres.create_new_genres()
     cy.get('[id="inputtext"]').clear().type('NewGenresToEdit')
     cy.get('[class="p-button-label"]').contains('Save').click()
     
     cy.reload()

     cy.get('table').contains('td','ENABLED').should('be.visible')
    
     cy.get('table').contains('td','NewGenresToEdit').get('[class="p-element p-button-rounded p-button-info mr-2 p-button p-component p-button-icon-only"]')
                              .click()
     cy.get('table').contains('td','ENABLED').should('not.exist')
     cy.get('table').contains('td','DISABLED').should('be.visible')
})

it.only('Create new genres and delete it', ()=>{
     genres.create_new_genres()
     cy.get('[id="inputtext"]').clear().type('NewGenresToEdit')
     cy.get('[class="p-button-label"]').contains('Save').click()
     
     cy.reload()
     cy.get('table').contains('td','NewGenresToEdit').should('exist')
     cy.get('table').contains('td','NewGenresToEdit').get('[class="p-element p-button-rounded p-button-warning p-button p-component p-button-icon-only"]')
                              .click()
     cy.get('[class="p-button-label"]').contains('Yes').click()
     cy.reload()
     cy.get('table').contains('td','NewGenresToEdit').should('not.exist')
})


/*it('sort by id',() => {
   cy.get('[psortablecolumn="id"][class="p-element p-sortable-column"]')
        .should('be.visible')
        .click()
   cy.get('[psortablecolumn="id"][class="p-element p-sortable-column p-highlight"][aria-sort="ascending"]')
        .should('be.visible')
})*/


