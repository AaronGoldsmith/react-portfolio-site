import React from "react";
import "./nav.css"
import { Link  } from "react-router-dom";

class Navtabs extends React.Component{

  state = {
    page: "home",
  }

  handleClick = (item) => {
    this.setState({page:item.target.className.split(' ')[1]});
    setTimeout(function(){
      window.scrollBy(0,window.innerHeight)
    });
    item.target.scrollIntoView();
  }



  render(){
    return (
      <nav id='navbar'>

          <div onClick={this.handleClick} className="nav-tab intro">
            <Link to="/about">Introduction</Link></div>

          <div onClick={this.handleClick} className="nav-tab folio">
            <Link to="/portfolio">Portfolio</Link></div>

          <div onClick={this.handleClick} className="nav-tab cont">
            <Link to="/portfolio">Contact</Link></div>
      </nav>
    )
  }
} 
export default Navtabs;