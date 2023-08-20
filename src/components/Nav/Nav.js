import React from "react";
import { Link } from "react-router-dom";

// import "./Nav.css"

function Nav() {
  return (
    <div className="nav">
      <ul>
        <li className="nav-home">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-info">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-games">
          <Link to="/games">Games</Link>
        </li>
        <li className="nav-creategames">
          <Link to="/games/new-game">New Game</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
