import React from 'react';



function NewContacts(props) {

  return (
    <div className="my-contact" id={props.id}>
      <h3 >
        {props.fullName}
     </h3>
     <h3 >
        {props.phone}
    </h3>
     <button id= "contact-btn" onClick={props.onClick}>Delete</button>
    </div>
  );
}





export default NewContacts;
