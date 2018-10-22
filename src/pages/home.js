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
          <span id='contact-email' mailto="agoldsmith@alumni.scu.edu">agoldsmith@alumni.scu.edu</span>
          <div>
          <a className="App-link" href="https://github.com/AaronGoldsmith" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> 
          </a>
            <a className="App-link" href="https://www.linkedin.com/in/aarongoldsmith-1/" target="_blank"rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <Navtabs />
        </header>
        <Card id='1' title="Get to know Aaron">Aaron is a creative and hard-working individual with a life-long love and fascination for technology. Prior to moving down to Santa Clara to attend University, Aaron lived in Oakland for the first eighteen years of his life. He had the privilege of attending smaller academic schools in Oakland, which he believes helped foster a personal mentality to create “positive change” in the world. </Card>
        <Card id='2' title="Education">Aaron earned his degree in Computer Science from Santa Clara University. He loves to design, build, and create tools and software that can be used and enjoyed by others. Technology has become the fabric through which people around the world connect and share ideas. Aaron knows how fortunate he is to be developing software in such an exciting time that allows people to transcend the <em>typical</em> human experience the . Aaron was fortunate enough to grow up during the start of the digital age; when tiny computers made huge decisions, and when human beings could reach worldwide audiences. Aaron would ultimately like to create software that help others and improve their lives. He feels incredibly privileged to have been given an opportunity to get a diverse education, and is determined to work on projects that he feels serves the greater good.</Card>
        <Card id='3' title="Trusted & Responsible">While attending Head Royce School for grades 9-12, Aaron applied to the school honor council and was accepted along with a dozen students throughout the four grades.The Honor Council was created on behalf of the students so that administrators could have trusted student insight on relevant issues coming to the upper school head of school. Additionally, Aaron sat on the Kappa Sigma Judicial Board for three years while attending Santa Clara University. The Judicial board is an essential part of the fraternity because it enforces the rules that were created to keep us safe by administering disciplinary consequences to those who need it. </Card>
      </div>
    );
  }
}

export default Home;
