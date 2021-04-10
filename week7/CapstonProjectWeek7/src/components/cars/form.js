import React from "react";
import {v4 as uuidv4} from "uuid";
import { useDispatch } from "react-redux";



export default function Form(props) {
    const dispatch = useDispatch();  
    const {add} = props;

    function onSubmit(e) {
      e.preventDefault();
      const mak = document.getElementById("makeInput");
      const mod = document.getElementById("modelInput");
      dispatch(add({ make: mak.value, model: mod.value,  _id: uuidv4() }));
    }
    
    return (
        <form id= "carForm" onSubmit={onSubmit}>
             <input
                required
                id = "makeInput"
                name= "make"
                className= "makeInput"
                placeholder= "Make"
            ></input>
            <input
                required
                id = "modelInput"
                name= "model"
                className= "modelInput"
                placeholder= "Model"
            ></input>
            <button id= "addVehicle1">Add Car</button>            
        </form>
    )
}