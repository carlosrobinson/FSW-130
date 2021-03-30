import React from 'react';
import ContactForm from "./ContactForm"
import NewContacts from "./NewContacts"
import {connect} from "react-redux"
import {useDispatch} from "react-redux"
import { addContact, removeContact } from"./actions/index"

function App(props) {
  const dispatch = useDispatch()
  function delContact(e) {
    const id = e.target.parentNode.id
    dispatch(removeContact(id))
  }


  return (
    
    <div >
       <ContactForm/>
       {props.contacts.map((items, i) => {
         return <NewContacts
              key= {i}
              fullName= {items.fullName}
              phone = {items.phone}
              id = {items.id}
              onClick= {delContact}
           />
       })}
    </div>
  );
}

function mapStateToProps(globalState) {
  return {
    contacts: globalState
  }
}

export default connect(mapStateToProps,{addContact, removeContact})(App);
