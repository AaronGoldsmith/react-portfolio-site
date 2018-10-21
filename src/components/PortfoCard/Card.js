import React from "react";
import "./Card.css"
const Card = (props) => (
  <div className="card">
      <h1 className="card-title"> {props.title}</h1>
  </div>

);
export default Card;