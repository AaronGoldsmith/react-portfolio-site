import React from "react";
import "./nav.css"
class Navtabs extends React.Component{
  state = {
    page: "home",
  }

  handleClick = (item) => {
    this.setState({page:item.target.className.split(' ')[1]});
    item.target.scrollIntoView();
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