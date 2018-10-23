import React, { Component } from 'react';
import Card from "../components/PortfoCard/Card"
import myself from "../agoldsmith.jpg"
import Navtabs from "../components/Nav/Navtabs"
import './pages.css';

class Home extends Component
{
  render()
  {
    return (
      <div className="bg" id="app">
        <header className="App-header">
          <div className="avatar">
            <img src={myself} alt='Aaron Goldsmith'></img>
          </div>
          <h2 className="text-center myname">
            <span id="first">Aaron </span><span id="last">Goldsmith</span>
          </h2>
          <a id='contact-email' href="mailto:agoldsmith@alumni.scu.edu">agoldsmith@alumni.scu.edu</a>
          <div>
            <a className="App-link" href="https://github.com/AaronGoldsmith" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a className="App-link" href="https://www.linkedin.com/in/aarongoldsmith-1/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <Navtabs />
        </header>
      </div>
    );
  }
}

export default Home;
