import { v4 as uuidv4 } from "uuid";
const initialState = {
    trucks: [
        {
            make: "Chevrolet",
            model: "Silverado",
            _id: uuidv4()
        },
        {
            make: "Ford",
            model: "F-150",
            _id: uuidv4()
        },
        {
            make: "GMC",
            model: "Sierra",
            _id: uuidv4()
        },
        {
            make: "Toyota",
            model: "Tocoma",
            _id: uuidv4()
        }
    ]
}
 
export function addTruck(truck) {
    return {
        type: "ADD_TRUCK",
        payload: truck
    }
}

export function deleteTruck(truck) {
    return {
        type: "DELETE_TRUCK",
        payload: truck
    }
}

export function truckReducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_TRUCK":
            return {
                ...state,
                trucks: [...state.trucks, action.payload],
            };
        case"DELETE_TRUCK": 
            const updatedArr = state.trucks.filter((truck) => truck._id !== action.payload)
            return {
                ...state,
                trucks: updatedArr
            };
        default: 
            return state;
    }
}