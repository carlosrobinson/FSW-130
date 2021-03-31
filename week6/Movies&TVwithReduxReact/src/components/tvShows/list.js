import React from "react";
import Header from "./header";
import Form from "./form";
import { useDispatch } from "react-redux";
export default function TvShows(props) {
  const { add, /* get, */ state, del } = props;
  const dispatch = useDispatch();
  const shows = state.tvShows;
  function onDelete(e) {
    e.preventDefault();
    
    dispatch(del(e.target.parentNode.id));
    console.log(e.target.parentNode.id);
  }
  return (
    <div>
      <Header />
      <Form add={add} />
      {shows.map((x) => {
        return (
          <div key={x.id}>
          <hr/>
            <div id={x.id} className="show">
              <h1 className="showTitle">{x.title}</h1>
              <button className="showDelBtn" onClick={onDelete}>
                Delete TV Show
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}