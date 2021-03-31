import { v4 as uuidv4 } from "uuid";
const initialState = {
  movies: [
    { title: "Death Warrant", id: uuidv4() },
    { title: "Deceptions", id: uuidv4() },
  ],
};
export function addMovie(movie) {
  return {
    type: "ADD_MOVIE",
    payload: movie,
  };
}
export function deleteMovie(movie) {
  console.log(movie);
  return {
    type: "DELETE_MOVIE",
    payload: movie,
  };
}
export function getMovie() {
  return {
    type: "GET_MOVIE",
  };
}
export function movieReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case "DELETE_MOVIE":
      console.log("hello");
      console.log(action.payload);
      const updatedArr = state.movies.filter((movie) => {
        console.log(movie);
        return movie.id !== action.payload;
      });
      return {
        ...state,
        movies: updatedArr,
      };
    case "GET_MOVIE":
      return {
        ...state,
      };
    default:
      return state;
  }
}