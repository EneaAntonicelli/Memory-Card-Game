import React from "react";
import "./NavBar.css";

const NavBar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://salty-mountain-26362.herokuapp.com/"
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/EneaAntonicelli">
            GitHub
          </a>
        </li>
      </ul>
      <h5 className="score">Score: {props.score}</h5>

      <h5 className="highScore">High Score: {props.highScore}</h5>
    </div>
  </nav>
);
export default NavBar;
