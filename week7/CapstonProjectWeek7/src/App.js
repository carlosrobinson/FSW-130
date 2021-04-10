import React from "react";
import {connect} from "react-redux";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cars from "./components/cars/carList";
import Trucks from "./components/trucks/truckList";
import {Switch, Route} from "react-router-dom";
import {addCar, deleteCar} from "./redux/cars";
import {addTruck, deleteTruck} from "./redux/trucks";


function App(props) {

    return (
        <div>
            <Navbar/>
            <Switch>
              <Route  path= "/cars" >
                <Cars
                add={addCar}
                del={deleteCar}
                state= {props.payload.cars}
                />
              </Route>
              <Route  path= "/trucks">
                <Trucks
                  add={addTruck}
                  del={deleteTruck}
                  state= {props.payload.truck}
                />
              </Route>
            </Switch>
            <Footer/>
        </div>
    )
}


function mapStateToProps(globalState) {
   console.log(globalState);
  return {
    payload: globalState,
  };
}

const mapDispatchToProps = {
  addCar: addCar,
  deleteCar: deleteCar,
  addTruck: addTruck,
  deleteTruck: deleteTruck
};


export default  connect( mapStateToProps,mapDispatchToProps)(App)