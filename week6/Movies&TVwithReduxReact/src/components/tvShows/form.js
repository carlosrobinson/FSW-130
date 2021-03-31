import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
export default function Form(props) {
  const dispatch = useDispatch();
  const { add } = props;
  function onSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("titleInput");
    dispatch(add({ title: name.value, id: uuidv4() }));
  }
  return (
    <form id="tvForm" onSubmit={onSubmit}>
      <input
        required
        id="titleInput"
        className="titleInput"
        name="title"
        placeholder="Tv Show Title"
      ></input>
      <button id="addShowBtn">Add Tv Show</button>
    </form>
  );
}