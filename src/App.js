import React, { Component } from 'react';
import Home from "./pages/home"

// import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

class App extends Component {

  render() {
    return (
        <div className="App">
          <Home />
        </div>     
    );
  }
}

export default App;
