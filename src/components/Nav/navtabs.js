import React from "react";
import "./nav.css"

export const Navtabs = (props) => (


      <nav id='navbar' className="navigation">

          <span onClick={props.handleClick} className="nav-tab intro">
            Introduction</span>

          <span onClick={props.handleClick} className="nav-tab folio">
            Portfolio</span>

      </nav>

);