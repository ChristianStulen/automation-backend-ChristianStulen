import * as clientHelpers from '../helpers/clientHelpers'

const LOGIN_URL = 'http://localhost:3000/api/login'
const LOGOUT_URL = 'http://localhost:3000/api/logout'
const ROOMS_URL = 'http://localhost:3000/api/rooms'
const CLIENTS_URL = 'http://localhost:3000/api/clients'
const BILLS_URL = 'http://localhost:3000/api/bills'
const RESERVATIONS_URL = 'http://localhost:3000/api/reservations'
const NEW_ROOM_URL = 'http://localhost:3000/api/room/new'
const ROOM_URL = 'http://localhost:3000/api/room/3'

describe ('Test suite for Hotel', function(){
    
    it('TC01, Perform login and logout',() =>{
        clientHelpers.LogIn(LOGIN_URL) 
        clientHelpers.LogOut(LOGOUT_URL) 
    })

    it('TC02, Navigate Everywhere', () =>{
        clientHelpers.GetRooms(LOGIN_URL, ROOMS_URL) 
        clientHelpers.GetClients(LOGIN_URL, CLIENTS_URL)
        clientHelpers.GetBills(LOGIN_URL, BILLS_URL)
        clientHelpers.GetReservations(LOGIN_URL, RESERVATIONS_URL)
    })

    it('TC03, Create and Delete room', () =>{
        clientHelpers.PostNewRoomExample(LOGIN_URL, NEW_ROOM_URL)
        clientHelpers.DeleteLastRoom(LOGIN_URL, ROOM_URL)
    })

    it('TC04, Create room', () =>{
        clientHelpers.PostNewRoomExample(LOGIN_URL, NEW_ROOM_URL)
    })

    it('TC05, Edit room', () =>{
        clientHelpers.PutLastRoom(LOGIN_URL, ROOM_URL)
    })
    
    after('Resets Server', () =>{
        clientHelpers.DeleteLastRoom(LOGIN_URL, ROOM_URL)    
    })
})