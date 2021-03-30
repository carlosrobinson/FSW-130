import React from 'react';
import {useDispatch} from "react-redux"
import { v4 as uuidv4 } from "uuid"

import { addContact } from "./actions/index"

function ContactForm() {
    
    const dispatch = useDispatch()



// handleChange() {

// }

function handleSubmit(e) {
    e.preventDefault()
    const full = document.getElementById("fname")
    const phone = document.getElementById("phone")

    let phoneNumber = phone.value
    let first3 = phoneNumber.slice(0, 3)
    let next3 = phoneNumber.slice(3, 6)
    let last4 = phoneNumber.slice(6)
    let phoneNumWithDashes = first3 + "-" + next3 + "-" + last4
    console.log(phoneNumWithDashes)
    
    dispatch(addContact({
        "fullName": full.value, "phone": phoneNumWithDashes, "id": uuidv4()
    }))


}

        return (
                <form className="my-form"onSubmit={handleSubmit} >
                    <input type= "text" name= "fullName" id="fname" placeholder= "Full Name"/>
                    <br/>
                    <input type= "tel" name= "phone" id= "phone" placeholder= "Phone Number No Dashes"/>
                    <br/>
                    <button>Add Contact</button>
                </form>
        );
    
}

export default ContactForm;