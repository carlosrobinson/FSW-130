import {createStore} from "redux"

const contactReducer = (myContacts = [], actions) => {
    switch(actions.type) {
        case "ADD_CONTACT":
            return  [...myContacts, actions.payload]
        case "REMOVE_CONTACT": 
            const updatedContact = myContacts.filter(contact => contact.id !== actions.payload)
            return updatedContact
        default: 
        return myContacts
    }
}

// Store
export const store = createStore(contactReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  store.subscribe(() => {
      console.log(store.getState())
  })

export default contactReducer