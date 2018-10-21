import React, { Component } from 'react';
import Card from "../components/PortfoCard/Card"
import myself from "../agoldsmith.jpg"
import Navtabs from "../components/Nav/Navtabs"
import './pages.css';

class Home extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          {/* round pic of me */}
          <div className="avatar">
            <img src={myself}></img>
          </div>
          <h2 className="text-center myname">
            <span>Aaron </span><span>Goldsmith</span>
          </h2>
          <div>
          <a className="App-link" href="https://github.com/AaronGoldsmith" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i> 
          </a>
            <a className="App-link" href="https://www.linkedin.com/in/aarongoldsmith-1/" target="_blank"rel="noopener noreferrer">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
          <Navtabs />
        </header>
        <Card title="hello">

        </Card>
      </div>
    );
  }
}

export default Home;
