/// <reference types="cypress" />

function LogIn(LOGIN_URL){
    cy.authenticateSession(LOGIN_URL)
}
function LogOut(LOGOUT_URL){
  
    cy.request({
    method: "POST",
    url: LOGOUT_URL, 
    headers:{
        'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
        'Content-Type': 'application/json;charset=UTF-8'
    }
    }).then(response =>{
      expect(response.body).to.eq("OK")
    })
}
function GetRooms(LOGIN_URL, ROOMS_URL){
  cy.authenticateSession(LOGIN_URL).then((response =>{
    cy.request({
      method: "GET",
      url: ROOMS_URL,
      headers:{
        "content-type": "text/plain; charset=utf-8",
        'X-User-Auth': JSON.stringify(Cypress.env().loginToken)
      }
    }).then((response =>{
      expect(response.status).to.eq(200)
    }))
  }))
}
function GetClients(LOGIN_URL, CLIENTS_URL){
  cy.authenticateSession(LOGIN_URL).then((response =>{
    cy.request({
      method: "GET",
      url: CLIENTS_URL,
      headers:{
        "content-type": "text/plain; charset=utf-8",
        'X-User-Auth': JSON.stringify(Cypress.env().loginToken)
      }
    }).then((response =>{
      expect(response.status).to.eq(200)
    }))
  }))
}
function GetBills(LOGIN_URL, BILLS_URL){
  cy.authenticateSession(LOGIN_URL).then((response =>{
    cy.request({
      method: "GET",
      url: BILLS_URL,
      headers:{
        "content-type": "text/plain; charset=utf-8",
        'X-User-Auth': JSON.stringify(Cypress.env().loginToken)
      }
    }).then((response =>{
      expect(response.status).to.eq(200)
    }))
  }))
}
function GetReservations(LOGIN_URL, RESERVATIONS_URL){
  cy.authenticateSession(LOGIN_URL).then((response =>{
    cy.request({
      method: "GET",
      url: RESERVATIONS_URL,
      headers:{
        "content-type": "text/plain; charset=utf-8",
        'X-User-Auth': JSON.stringify(Cypress.env().loginToken)
      }
    }).then((response =>{
      expect(response.status).to.eq(200)
    }))
  }))
}
function PostNewRoomExample(LOGIN_URL, NEW_ROOM_URL){
  cy.authenticateSession(LOGIN_URL).then((response =>{
    cy.request({
      method: "POST",
      url: NEW_ROOM_URL,
      headers:{
        'Content-Type': 'application/json',
        'X-User-Auth': JSON.stringify(Cypress.env().loginToken)
      },
      body:{
      "features":["balcony"],
      "category":"double",
      "number":1,
      "floor":2,
      "available":true,
      "price":3,
      "id":3
      }
    }).then((response =>{
      expect(response.status).to.eq(200)
      expect(response.body.id, 'New room to have id').to.eq(3)
    }))
  }))

}
function DeleteLastRoom(LOGIN_URL, ROOM_URL){
  cy.authenticateSession(LOGIN_URL).then((response =>{
    cy.request({
      method: "DELETE",
      url: ROOM_URL,
      headers:{
        'Content-Type': 'application/json',
        'X-User-Auth': JSON.stringify(Cypress.env().loginToken)
      },
    }).then(response =>{
      const responseAsString = JSON.stringify(response)
      expect(response.body.ok, 'Is id 3 deleted:').true
      
    })
  }))
}
function PutLastRoom(LOGIN_URL, ROOM_URL){
  cy.authenticateSession(LOGIN_URL).then((response =>{
    cy.request({
      method: "PUT",
      url: ROOM_URL,
      headers:{
        'Content-Type': 'application/json',
        'X-User-Auth': JSON.stringify(Cypress.env().loginToken)
      },
      body:{
        "features":["sea_view"],
        "category":"single",
        "number":11,
        "floor":22,
        "available":false,
        "price":33,
        "id":3
        }
    }).then(response =>{
      expect(response.body.price, 'Edited room to have price').to.eq(33)
      expect(response.status).to.eq(200)
    })
  }))
}

module.exports = {
    LogIn,
    LogOut,
    GetRooms,
    GetClients,
    GetBills,
    GetReservations,
    PostNewRoomExample,
    DeleteLastRoom,
    PutLastRoom
}