import React from "react"
import Header from "./header";
import Form from "./form";
import { useDispatch } from "react-redux";

export default function Cars(props) {
    const { add, /* get, */ state, del} = props;
    const dispatch = useDispatch();
    const cars = state.cars;

    function onDelete(e) {
      e.preventDefault(); 
      console.log(del)
      dispatch(del(e.target.parentNode.id));
      console.log(e.target.parentNode.id);
    }

    return (
        <div id= "car-info">
            <Header/>   
            <Form add = {add}/>
            {cars.map((car) => {
                console.log(car)
                return (
                    <div key= {car._id}>
                        <hr/>
                        <div id={car._id} className="cars">
                            <h1 className="carMake">{car.make}</h1>
                            <h2  className="carModel">{car.model}</h2>
                            <h2>{car._id}</h2>
                            <button className="delCar" onClick={onDelete}>Delete Vehicle</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}