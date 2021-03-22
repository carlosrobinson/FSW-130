const redux = require("redux")
const {combineReducers, createStore} = require("redux")

const {addMovie, removeMovie,movieReducer} = require("./reducers/movies")
const {addTvShow, removeTvShow, tvShowReducer} = require("./reducers/tvShows")


const rootReducer = combineReducers({
    myMovies: movieReducer,
    tvShowReducer: tvShowReducer,
})

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})
//Movies
store.dispatch(addMovie("Soul Plane"))
store.dispatch(addMovie("Avengers"))
store.dispatch(addMovie("Hulk"))
store.dispatch(addMovie("Captain America"))
store.dispatch(addMovie("Gardians of the Galaxy"))
store.dispatch(removeMovie("Captain America"))


//TV Shows
store.dispatch(addTvShow("American Gods"))
store.dispatch(addTvShow("The Walking Dead"))
store.dispatch(addTvShow("Yellowstone"))
store.dispatch(addTvShow("Mayans M.C."))
store.dispatch(addTvShow("The 100"))
store.dispatch(removeTvShow("Yellowstone"))
