import { v4 as uuidv4 } from "uuid";
const initialState = {
    cars: [
        {
            make: "Chevrolet",
            model: "Bolt EV",
            _id: uuidv4()
        },
        {
            make: "Ford",
            model: " Mustang",
            _id: uuidv4()
        },
        {
            make: "GMC",
            model: "Yukon",
            _id: uuidv4()
        },
        {
            make: "Toyota",
            model: "Corolla",
            _id: uuidv4()
        }
       
    ]
}

export function addCar(car) {
    return {
        type: "ADD_CAR",
        payload: car
    }
}

export function deleteCar(car) {
    return {
        type: "DELETE_CAR",
        payload: car
    }
}


export function carReducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_CAR":
            return {
                ...state,
                cars: [...state.cars, action.payload],
            };
        case "DELETE_CAR": 
            const updatedArr = state.cars.filter((car) => car._id !== action.payload
)
            return {
                ...state,
                cars: updatedArr,
            };
        default: 
            return state;
    }
}
