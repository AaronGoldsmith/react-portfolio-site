import React, { Component } from 'react';
import Home from "./pages/home"
import './index.css';
import * as serviceWorker from './serviceWorker';

class App extends Component {
  componentWillUnmount(){
    serviceWorker.unregister();
  }
  render() {
    return (
        <div className="App">
          <Home />
        </div>     
    );
  }
}

export default App;
