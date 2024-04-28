import {Login} from '../support/src/login';
import {Genres} from '../support/src/genres'; 

const login = new Login();
const genres = new Genres();

beforeEach(() =>{
    login.login()
    genres.open_genres_page()
});

it('sort by id',() => {
   cy.get('[psortablecolumn="id"][class="p-element p-sortable-column"]')
        .should('be.visible')
        .click()
   cy.get('[psortablecolumn="id"][class="p-element p-sortable-column p-highlight"][aria-sort="ascending"]')
        .should('be.visible')
})