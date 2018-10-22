import React, { Component } from 'react';
import Home from "./pages/home"
import './App.css';

class App extends Component {
  state = {hiddenIcon:false}

  handleScroll = () =>{
    if(window.scrollY>260){
      this.setState({hiddenIcon:false})
    }
    else{
      this.setState({hiddenIcon:true})
    }
  }
  handleChevron = () => {
    if(window.scrollY>50){
      window.scroll(0,-1)
    }
  }
  
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }
  render() {
    return (
      <div className="App">
        <Home />
        {(!this.state.hiddenIcon)?
        <i onClick={this.handleChevron} className="fas fa-chevron-up"></i>:<span></span>}
      </div>
    );
  }
}

export default App;
