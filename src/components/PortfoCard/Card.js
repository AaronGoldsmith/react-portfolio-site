import React from "react";
import "./Card.css"
export const Card = ({title, children}) => (
  <div className="card" id="sy">
      <h2 className="card-title text-center"> {title}</h2>
      {children}
  </div>

);