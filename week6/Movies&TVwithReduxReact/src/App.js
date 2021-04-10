import "./App.css";
import React from "react";
import { connect } from "react-redux";
 
import Movies from "./components/movies/list";
import TvShows from "./components/tvShows/list";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { addTvShow, deleteTvShow, getTvShow } from "./redux/tvShows";
import { addMovie, deleteMovie, getMovie } from "./redux/movies";

function App(props) {
  // console.log(props);
  return (
    <div className="appDiv">
      <header>Filmed Favorites</header>
      <Navbar />
      <Switch>
        <Route exact path="/movies">
          <Movies
            add={addMovie}
            del={deleteMovie}
            state={props.payload.movies}
            get={getMovie}
          />
        </Route>
        <Route exact path="/tvshows">
          <TvShows
            add={addTvShow}
            del={deleteTvShow}
            state={props.payload.tvShows}
            get={getTvShow}
          />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
function mapStateToProps(globalState) {
  console.log(globalState);
  return {
    payload: globalState,
  };
}
const mapDispatchToProps = {
  addMovie: addMovie,
  deleteMovie: deleteMovie,
  getMovie: getMovie,
  addTvShow: addTvShow,
  deleteTvShow: deleteTvShow,
  getTvShow: getTvShow,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);