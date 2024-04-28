export class Login{
    baseURL: string = 'http://localhost:4200/';
    username: string = 'tatevikyyy';
    password: string = 'Test123!';

    login(){
        cy.visit(this.baseURL)
        cy.get('#username',).clear().type(this.username)
        cy.get('[type="password"]').clear().type(this.password).type('{enter}')
    }
}