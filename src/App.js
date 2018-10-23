import React, { Component } from 'react';
import Home from "./pages/home"
import About from "./pages/About"
import './App.css';

class App extends Component {
  state = {scrolledDown:false}

  handleScroll = () => {
    if(window.scrollY>=260){
      this.setState({scrolledDown:false})
    }
    else{
      this.setState({scrolledDown:true})
    }
  }
  handleChevron = () => {
    if(window.scrollY>50){
      window.scroll(0,-1)
    }
  }
  
  componentDidMount(){
    this.setState({scrolledDown:true})
    window.addEventListener('scroll', this.handleScroll);

  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }
  render() {
    return (
      <div className="App">
        <Home />
            {((!this.state.scrolledDown)?<i onClick={this.handleChevron} className="fas fa-chevron-up"></i>:<i></i>)}
        <About />
      </div>
    );
  }
}

export default App;
