import React from "react";
import "./nav.css"
class Navtabs extends React.Component{
  state = {
    page: "home",
    hidden: false
  }


  render(){
    return (
      <nav id='navbar'>
          <div className="nav-tab">
            Introduction
          </div>
          <div className="nav-tab">
            Portfolio
          </div>
          <div className="nav-tab">
            Contact
          </div>
      </nav>
    )
  }
} 
export default Navtabs;