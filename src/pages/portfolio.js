import React from "react"
import { Project } from "../components/Project"
import { Highlight } from "../components/Highlight/Highlight"
import { descriptions } from "../config/text"
import {local_images as images, 
        local_pdfs as pdfs,
        portfo_url as portfolio } from "../config/path"
class Portfolio extends React.Component {
  state = {
    sections: [],
    selected: undefined
  }
  getProject = () => {
    // console.log('trying to find ' + this.state.selected)
    return this.state.projects.find(p => p.pname === this.state.selected)
  }
  getDescription = () => {
    return this.state.descriptions[this.state.selected];
  }
  closeInfo = () => {
    this.setState({ selected: undefined })
  }

  handleClick = (btn) => {
    let named = btn.target.alt
    if (btn.target.classList.contains("img")) {
      document.getElementsByClassName('img')[0].classList.remove('activated');
    }
    else {
      this.setState({ selected: named });
    }

  }
  componentDidMount() {
    this.setState({
      descriptions,
      // if using mongoDB, this will be where API gets called for data
      projects: [
        { pname: "Hangman", keywords: ["2D canvas", "Game Design", "Bootstrap", "p5.js"], pgit: "hangman", pweb: `${portfolio}/hangman/`, pcat: 1, imgSrc: `${images}/hangman-sample.png`, type: "webApp" },
        { pname: "Stock Wars", keywords: ['Simulation', 'Stock Market', 'handlebrs'], pgit: "stock-wars", pweb: "https://aqueous-brook-18608.herokuapp.com/", pcat: 1, imgSrc: `${images}/stock-sample.png`, type: "webApp" },
        { pname: "VG Nexus", keywords: ['Game Development', 'AWS', 'React', 'User Authentication'], pgit: "https://github.com/JackRa88it/VG-Nexus", pweb: "https://vgnexus.com", pcat: 1, imgSrc: `${images}/vg-sample.png`, type: "webApp" },
        { pname: "Bamazon", keywords: ['CLI', 'Node.js'], pgit: "Bamazon", pweb: `${portfolio}/Bamazon/`, pcat: 1, imgSrc: undefined, type: "shell" },
        { pname: "Train Sim", keywords: ['Firebase'], pgit: "Train-Time", pweb: `${portfolio}/Train-Time/`, pcat: 1, imgSrc: `${images}/train-sample.png`, type: "webApp" },
        { pname: "LIRI App", keywords: ['Spotify API', 'Node.js'], pgit: "liri-node-app", pweb: `${portfolio}/liri-node-app/`, pcat: 1, imgSrc: undefined, type: "shell" },
        { pname: "Clicker Game", keywords: ['React.js', 'Digital Photography'], pgit: "charlie-game", pweb: `${portfolio}/charlie-game/`, pcat: 1, imgSrc: `${images}/charlie-sample.png`, type: "webApp" },
        { pname: "Memify gifs", keywords: ['Giphy API', 'Bootstrap'], pgit: "GIFTastic", pweb: `${portfolio}/GIFTastic/`, pcat: 1, imgSrc: undefined, type: "webApp" },
        { pname: "Timed Trivia", keywords: ['Timed Quiz', 'Interval/Timeouts'], pgit: "TriviaGame", pweb: `${portfolio}/TriviaGame/`, pcat: 1, imgSrc: undefined, type: "webApp" },
        { pname: "University Pathway", keywords: [], pgit: "", pweb: `${pdfs}/pathway.pdf`, pcat: 3, imgSrc: undefined, type: "doc" },
        { pname: "Philosophy of CS", keywords: ['Philosophy', 'Computer Science'], pgit: "", pweb: `${pdfs}/philosophyCS.pdf`, pcat: 3, imgSrc: undefined, type: "doc" },
        { pname: "Eco Housing", keywords: ['Eco'], pgit: "", pweb: `${pdfs}/Eco Housing.pdf`, pcat: 3, imgSrc: undefined, type: "doc" },
        { pname: "Myanmar Politics", keywords: ['Myanmar'], pgit: "", pweb: `${pdfs}/Myanmar.pdf`, pcat: 3, imgSrc: undefined, type: "doc" },
        { pname: "Generative Art", keywords: ['Generative', 'Art'], pgit: "", pweb: `${pdfs}/GenerativeArt.pdf`, pcat: 3, imgSrc: undefined, type: "doc" },
        { pname: "Generative Art", keywords: ['Generative', 'Art'], pgit: "GenerativeGold", pweb: `${portfolio}/GenerativeGold/`, pcat: 2, imgSrc: `${images}/GenerativeArt.png`, type: "webApp" },
        { pname: "Python Networking", keywords: ['talk.py', 'listen.py', 'diffiehellman'], pgit: "networking-labs", pweb: `${portfolio}/networking-labs/`, pcat: 2, imgSrc: undefined, type: 'shell' },
        { pname: "CharStream Analysis", keywords: ['generate', 'python', 'data'], pgit: "", pweb: `${pdfs}/CharStreamAnalysis.pdf`, pcat: 2, imgSrc: undefined, type: 'doc' },
        { pname: "Bandwith Analysis", keywords: ['lab', 'analysis', 'bandwith'], pgit: "", pweb: `${pdfs}/NetworkAnalysis.pdf`, pcat: 2, imgSrc: undefined, type: 'doc' },
        { pname: "Graph Functions", keywords: ['canvas', 'transformations', 'graphics'], pgit: "transformations", pweb: `${portfolio}/transformations/`, pcat: 2, imgSrc: undefined, type: 'webApp' },
        { pname: "Force Engine", keywords: ['canvas', 'forces', 'graphics'], pgit: "ForceEngine", pweb: `${portfolio}/ForceEngine`, pcat: 2, imgSrc: `${images}/forces.png`, type: 'webApp' },
        { pname: "Game of Life", keywords: ['game', 'gol', 'conway'], pgit: "game-of-life", pweb: `${portfolio}/game-of-life`, pcat: 2, imgSrc: `${images}/gol.png`, type: 'webApp' },
        { pname: "Multiplexer Lab", keywords: ['Logic Design', 'COEN'], pgit: "", pweb: `${pdfs}/Multiplexer1.pdf`, pcat: 2, imgSrc: undefined, type: 'doc' },
        { pname: "Multiplexer pt2", keywords: ['Logic Design', 'COEN'], pgit: "", pweb: `${pdfs}/Multiplexer2.pdf`, pcat: 2, imgSrc: undefined, type: 'doc' },
        // {pname: "",keywords:[''], pgit: "", pweb: "https://agoldsmith.exposure.co/", pcat: 4, imgSrc: `/assets/photography/IMG_05.jpg`,type:"photo"},
        // {pname: "",keywords:[''], pgit: "", pweb: "https://agoldsmith.exposure.co/", pcat: 4, imgSrc: `/assets/photography/IMG_01.jpg`,type:"photo"},
        // {pname: "Onion Scraper",keywords:['Cheerio','The Onion News'], pgit: "news-scraper", pweb: "https://whispering-dusk-64800.herokuapp.com/", pcat: 1, imgSrc: `${images}/news-sample.png`,type:"webApp"},

      ],
      sections: [
        { title: "Development Projects", description: "These items were projects or assignments I submitted while attending the UC Berkeley Boot camp", cat: 1 },
        { title: "Computer Science", description: "Variety of assignments, labs, and projects that I've worked on", cat: 2 },
        { title: "University Papers", description: "These are various papers I wrote while attending Santa Clara University", cat: 3 },
        // {title:"Digital Photography", description: "Original Photography By Aaron Goldsmith", cat: 4}
      ]
    })
  }
  render() {
    const PHOTO = "Digital Photography"
    return (
      <div className="portfolio-page" id="page2" >
        <nav aria-labelledby='side navigation'>
          <ul className='side-nav' id='side'>
            {
              // side-navigation
              this.state.sections.map((category, i) => (
                <a key={i} href={"#" + category.cat}>
                  <li key={i} className="side-item">
                    <em>{category.title}</em>
                  </li>
                </a>))
            }
          </ul>
        </nav>
        {
          this.state.selected ?
            <Highlight
              Project={this.getProject()}
              clickHandler={this.closeInfo}
              description={this.getDescription()}
            /> : <span></span>
        }
        {
          this.state.sections.map((category, i) => (
            <section key={i} className="narrow" id={category.cat} >
              <h1 className="cat-title">{category.title}</h1>
              <h3 className="cat-title" >{category.description}</h3>

              <div className={`${category.title !== PHOTO ? "flexy" : "table"}`}>
                {this.state.projects.map((proj, i) => (
                  proj.pcat === category.cat ?
                    <Project key={i} project={proj} clickHandler={this.handleClick} /> : ''
                ))}
              </div>
            </section>

          )

          )
        }
        <hr />
        <p className='centered'>This website is work of Aaron Goldsmith</p>
        <p className="centered">Site development ongoing. Last deployment: <em>6/27/2019</em></p>

      </div>
    );

  }

}
export default Portfolio;