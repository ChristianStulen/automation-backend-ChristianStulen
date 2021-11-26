
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


const username = "tester01"
const password = "GteteqbQQgSr88SwNExUQv2ydb7xuf8c" 

Cypress.Commands.add('authenticateSession', (u) => {
    const LOGIN_URL = u
    const userCredentials = {
            "username": username,
            "password": password           
    }
    cy.request({
        method: "POST",
        url: LOGIN_URL, 
        headers:{
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(userCredentials)
    }).then((response =>{
        expect(response.status).to.eq(200)
        Cypress.env({loginToken:response.body})
    }))
})