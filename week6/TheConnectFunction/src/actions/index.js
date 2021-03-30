export function addContact(contact) {
    return {
        type: "ADD_CONTACT",
        payload: contact,

    }
}
export function removeContact(contact) {
    return {
        type: "REMOVE_CONTACT",
        payload: contact
    }
}

const initialState = {

            fullName: ["carlos"],
            phone: []

}


export  { initialState}