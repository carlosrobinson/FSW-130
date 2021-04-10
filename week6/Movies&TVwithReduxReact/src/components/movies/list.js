import React from "react";
import Header from "./header";
import Form from "./form";
import { useDispatch } from "react-redux";
export default function Movies(props) {
  //  
  const dispatch = useDispatch();
  const movies = state.movies;
  function onDelete(e) {
    e.preventDefault();
    console.log(del)
    dispatch(del(e.target.parentNode.id));
    console.log(e.target.parentNode.id);
  }
  return (
    <div>
      <Header />
      <Form add={add} />
      {movies.map((x) => {
        return (
          <div key={x.id}>
          <hr/>
            <div id={x.id} className="movie">
              <h1 className="movieTitle">{x.title}</h1>
              <button className="movieDelBtn" onClick={onDelete}>
                Delete Movie
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}