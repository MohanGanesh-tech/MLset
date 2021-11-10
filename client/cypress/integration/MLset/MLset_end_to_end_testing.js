/// <reference types="cypress" />

describe('MLset Desktop end to end Testing', () => {
    beforeEach(() => {
        cy.viewport(1280, 720)
    })

    // it.only("Testing", () =>{
    //     cy.visit('http://localhost')
    //     cy.contains('Sign Up').click()
    // })

    it("Signup Page", () => {
        cy.visit('http://localhost')
        cy.contains('Sign Up').click()
        cy.contains('Sign In').should('exist')
        cy.get('[id=firstname]').type('test')
        cy.get('[id=lastname]').type("test")
        cy.get('[id=email]').type("test4@gmail.com")
        cy.get('[id=password]').type('12345')
        cy.get('[id="confirm password"]').type('12345')
        cy.contains('Sign In').click().as('userCreate')
        cy.wait(1000)
        // cy.request('POST', 'http://localhost:8000/accounts/user_signup/', {
        //     "username": "test@gmail.com",
        //     "first_name": "test",
        //     "last_name": "test",
        //     "email": "test@gmail.com",
        //     "password": "12345"
        // }).then(
        //     (response) => {
        //       expect(response.body).to.have.property('status')
        //     }
        // )
       
    })

    it("Login Page", () => {
        cy.visit('http://localhost')
        cy.get('[id=email]').type("test4@gmail.com")
        cy.get('[id=password]').type("12345")
        cy.get('[value="Log In"]').click()
    })

    it("Home Page", () => {
        cy.contains('Home').should('exist')
        cy.contains('Machine Learning').click()
    })

})

// describe('MLset Mobile end to end Testing', () => {
//     it("first test", () => {
//         cy.viewport('iphone-5')
//         cy.visit('http://localhost/')
//         cy.contains('Sign Up').click()
//     })
// })