import {Login} from '../support/src/a_login';
import {Genres} from '../support/src/d_genres'; 

const login = new Login();
const genres = new Genres();

before(() =>{
    // cy.task("connectDB", 'delete from genres')
     login.login()
     genres.open_genres_page()
})

it('Create new genres', () =>{
     genres.create_new_genres_click_yes()
     cy.get('table').contains('td',genres.genresName).should('exist')
})

it('Create new genres and click cancel', () =>{
     genres.create_new_genres_click_yes()
     cy.get('[id="inputtext"]').clear().type('cancelTest')
     cy.get('[class="p-button-label"]').contains('Cancel').click()
     cy.get('table').contains('td','cancelTest').should('not.exist')
})

it('Create new genres and edit it', () => {
     genres.create_new_genres_click_yes()
     cy.get('[id="inputtext"]').clear().type('NewGenresToEdit')
     cy.get('[class="p-button-label"]').contains('Save').click()
     cy.get('table').contains('td','NewGenresToEdit').get('[class="p-element p-button-rounded p-button-success mr-2 p-button p-component p-button-icon-only"]')
                                                       .click()
     cy.get('[class="p-overflow-hidden"]').get('[id="inputtext"]').clear().type('EditedGenres')
     cy.get('[class="p-button-label"]').contains('Save').click()
     cy.get('table').contains('td','NewGenresToEdit').should('not.exist')
     cy.get('table').contains('td','EditedGenres').should('exist')
})

it('Create new and enable', () => {
     genres.create_new_genres_click_yes()
     cy.get('[id="inputtext"]').clear().type('NewGenresToEdit')
     cy.get('[class="p-button-label"]').contains('Save').click()
     cy.get('table').contains('td','ENABLED').should('be.visible')
     cy.get('table').contains('td','NewGenresToEdit').get('[class="p-element p-button-rounded p-button-info mr-2 p-button p-component p-button-icon-only"]')
                              .click()
     cy.get('table').contains('td','ENABLED').should('not.exist')
     cy.get('table').contains('td','DISABLED').should('be.visible')
})

it('Create new genres and delete it', ()=>{
     genres.create_new_genres_click_yes()
     cy.get('[id="inputtext"]').clear().type('NewGenresToEdit')
     cy.get('[class="p-button-label"]').contains('Save').click()
     cy.get('table').contains('td','NewGenresToEdit').should('exist')
     cy.get('table').contains('td','NewGenresToEdit').get('[class="p-element p-button-rounded p-button-warning p-button p-component p-button-icon-only"]')
                              .click()
     cy.get('[class="p-button-label"]').contains('Yes').click()
     cy.get('table').contains('td','NewGenresToEdit').should('not.exist')
})

it('Create new genres and dont delete it', ()=>{
     genres.create_new_genres_click_yes()
     cy.get('[id="inputtext"]').clear().type('NewGenresToEdit')
     cy.get('[class="p-button-label"]').contains('Save').click()
     cy.get('table').contains('td','NewGenresToEdit').should('exist')
     cy.get('table').contains('td','NewGenresToEdit').get('[class="p-element p-button-rounded p-button-warning p-button p-component p-button-icon-only"]')
                              .click()
     cy.get('[class="p-button-label"]').contains('No').click()
     cy.get('table').contains('td','NewGenresToEdit').should('exist')
})

it.only('sort by id',() => {
     //genres.genres_bulk_add(3)
     genres.open_genres_page()
     cy.reload()
     cy.get('table').get('[class="p-element p-datatable-tbody"]').get('tr[class="ng-star-inserted"]')
     .eq(1).first().get('span[class="p-column-title"]').as('a')
    
     // cy.get('table').get('[class="p-element p-datatable-tbody"]').get('tr[class="ng-star-inserted"]')
     // .eq(2).get('td').eq(1).get('span').as('b')
     // cy.get('@a').then((a) => {
     //      cy.get('@b').then((b) => {
     //        expect(b).to.eq(a)
     //      })
     // })

     
//    cy.get('[psortablecolumn="id"][class="p-element p-sortable-column"]')
//         .should('be.visible')
//         .click()
//    cy.get('[psortablecolumn="id"][class="p-element p-sortable-column p-highlight"][aria-sort="ascending"]')
//         .should('be.visible')
})


