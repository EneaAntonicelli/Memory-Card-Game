import React from "react";
import "./Card.css";

const Card = props => (
  <div className="img-container" onClick={() => props.clickCard(props.id)}>
    <div className="card">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Card;
