import React from "react";
import "./nav.css"
class Navtabs extends React.Component{
  state = {
    page: "home"
  }
  render(){
    return (
      <nav>
        <ul className="nav">
          <li>
            {/* Who I am */}
            Introduction
          </li>
          <li>
            Portfolio
          </li>
          <li>
            Contact
          </li>
        </ul>
      </nav>
    )
  }
} 
export default Navtabs;