import React, { Component } from 'react';
import Home from "./pages/home"
import './index.css';
// eslint-disable-next-line
import * as serviceWorker from './serviceWorker';

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
