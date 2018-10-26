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
      let el = document.getElementById('page2');
      if(el){
        el.scrollIntoView();
      }
    },150);
  }



  render(){
    return (
      <nav id='navbar' className="navigation">

          <div onClick={this.handleClick} className="nav-tab intro">
            <Link to="/about">Introduction</Link></div>

          <div onClick={this.handleClick} className="nav-tab folio">
            <Link to="/portfolio">Portfolio</Link></div>

      </nav>
    )
  }
} 
export default Navtabs;