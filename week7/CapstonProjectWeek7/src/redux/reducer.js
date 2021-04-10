import {createStore, combineReducers} from "redux"
import {carReducer} from "../redux/cars"
import {truckReducer} from "../redux/trucks"


let reducer = combineReducers({
    cars: carReducer,
    truck: truckReducer
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
store.subscribe(() => {
    //console.log(store.getStore())
})

export default store