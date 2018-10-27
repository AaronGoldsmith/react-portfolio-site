import React, { Component } from 'react';
import Home from "./pages/home"
import About from "./pages/About"
import Portfolio from "./pages/portfolio"
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
        </div>
      </Router>
     
    );
  }
}

export default App;
