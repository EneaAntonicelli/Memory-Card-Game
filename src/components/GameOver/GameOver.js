import React from "react";
import "./GameOver.css";

const GameOver = props => (
  <div className="jumbotron jumbotron-fluid text-center bg-primary">
    <div className="container">
      <h1 className="display-4">YOU LOST.</h1>
      <p className="lead">
        I am not sure about your skill level but... Here is your score:
        <span>{props.loserScore}</span>
      </p>
      <button className="btn btn-primary" onClick={() => props.playAgain()}>
        Play Again?
      </button>
    </div>
  </div>
);

export default GameOver;
