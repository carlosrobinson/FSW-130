import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <button className="navBtn">
        <Link to="/" className="link">
          Home
        </Link>
      </button>
      <button className="navBtn">
        <Link to="/movies" className="link">
          Movies
        </Link>
      </button>
      <button className="navBtn">
        <Link to="/tvshows" className="link">
          Tv Shows
        </Link>
      </button>
    </div>
  );
}