import React from "react";
import "./nav.css"
class Navtabs extends React.Component{
  state = {
    page: "home",
  }

  handleClick = (item) => {
    console.log(document.all);
    item.target.scrollIntoView(200);
    console.log(item.target.className.split(' ')[1])
  }


  render(){
    return (
      <nav id='navbar'>
          <div onClick={this.handleClick} className="nav-tab intro">
            Introduction
          </div>
          <div onClick={this.handleClick} className="nav-tab folio">
            Portfolio
          </div>
          <div onClick={this.handleClick} className="nav-tab cont">
            Contact
          </div>
      </nav>
    )
  }
} 
export default Navtabs;