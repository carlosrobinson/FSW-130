function addMovie(movie) {
    return {
        type:"ADD_MOVIE",
        payload: movie
    }
}

 function removeMovie(movie) {
    return {
        type:"REMOVE_MOVIE",
        payload: movie
    }
}

function getMovies(movies) {
    return {
        type:"GET_MOVIES",
        payload: movies
    }
}

 function movieReducer(myMovies = [], action) {
    switch(action.type) {
        case "ADD_MOVIE":
            return [...myMovies, action.payload]
        case "REMOVE_MOVIE": {
            
            const updatedArr = myMovies.filter(movie => movie !== action.payload)
            return updatedArr
        }
        case "GET_MOVIES":
            
            return [...myMovies, action.payload]
        default:
            return myMovies
    }
}

module.exports =  {addMovie, removeMovie, getMovies, movieReducer}