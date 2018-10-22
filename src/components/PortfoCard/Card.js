import React from "react";
import "./Card.css"
const Card = ({title,children}) => (
  <div className="card">
      <h2 className="card-title"> {title}</h2>
      <div>
      {children}
      </div>
  </div>

);
export default Card;