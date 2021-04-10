import React from "react"
import Header from "./header";
import Form from "./form";
import { useDispatch } from "react-redux";

export default function Trucks(props) {
    const { add, /* get, */ state, del } = props;
    const dispatch = useDispatch();
    const trucks = state.trucks;
 
    function onDelete(e) {
      e.preventDefault();
      console.log(del)
      dispatch(del(e.target.parentNode.id));
      console.log(e.target.parentNode.id);
    }

    return (
        <div id= "truck-info">
            <Header/>   
            <Form add = {add}/>
            {trucks.map((truck) => {
                return (
                    <div key= {truck._id}>
                        <hr/>
                        <div id={truck._id} className="trucks">
                            <h1 className="truckMake">{truck.make}</h1>
                            <h2  className="truckModel">{truck.model}</h2>
                            <button className="delTruck" onClick={onDelete}>Delete Vehicle</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

 