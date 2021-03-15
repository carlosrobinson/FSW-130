const redux = require("redux")

function addNewContact(contact) {
    return {
        type: "ADD_NEW_CONTACT",
        payload: contact
    }
}

function removeContact(contact) {
    return {
        type: "REMOVE_CONTACT",
        payload: contact
    }
}
const initialState = {
    newContact: []
    
}



function reducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_NEW_CONTACT":
            return {
                ...state,
                 newContact:[...state.newContact, action.payload]
               
            }
        case "REMOVE_CONTACT": 
            const updatedContact = state.newContact.filter(contact => contact !== action.payload)
            return {
                ...state,
                newContact: updatedContact
                
            }
            default:
                return state
    
        }
}


const store = redux.createStore(reducer)
store.subscribe(() => {
console.log(store.getState())
})

store.dispatch(addNewContact("name: Carlos, phone: 478-555-5555"))
store.dispatch(addNewContact("name: Mike, phone: 478-888-8888"))
store.dispatch(addNewContact("name: Joe, phone: 478-222-2222"))

store.dispatch(removeContact("name: Carlos, phone: 478-555-5555"))
