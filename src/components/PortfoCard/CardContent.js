import React from "react";
import "./Card.css"
const regex = /[\[](.+)[\]][\(](.+)[\)]/;

export const CardContent = ({children}) => (
  <div className="card-content">
    {children}
  </div>
);
