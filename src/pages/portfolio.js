import React from "react"
import {Project} from "../components/Project"
import {Highlight} from "../components/Highlight/Highlight"
class Portfolio extends React.Component{
  state = {
    sections: [],
    selected: undefined
  }
  getProject = () =>{
    return this.state.projects.find(p => p.pname===this.state.selected)
  }
  getDescription = () => {
    return this.state.descriptions[this.state.selected];
  }
  handleClick = (btn) => {
    let active = document.getElementsByClassName('activated')[0]
    if(btn.target.classList.contains('project-img')){
      btn.target.classList.toggle('activated');
      this.setState({selected:btn.target.alt});
    }
    if(active){
      active.classList.remove('activated');
      this.setState({selected: undefined})
    }
  }
  componentDidMount(){
    this.setState({
      descriptions: {
        "Hangman": "This game was developed during the Coding Boot Camp. This was project #3. If you run out of guesses, your stick figure dies and you recieve a screen with the correct answer",
        "Stock Wars":"Stock Wars is an application where users are able to compete with their friends, or publically using \"fake money\" on the stock market. Users will be able to have a set beginning cash amount and then invest in any number of stocks to see how they perform"
      },
      // if using mongoDB, this will be where API gets called for data
      projects: [ 
        {pname: "Hangman",keywords:[], pgit: "hangman", pweb: "https://aarongoldsmith.github.io/hangman/", pcat: 1, imgSrc: "/assets/images/hangman-sample.png", type:"webApp" },
        {pname: "Stock Wars", keywords:['Simulation','Stock Market'], pgit: "stock-wars", pweb: "https://aqueous-brook-18608.herokuapp.com/", pcat: 1, imgSrc: `/assets/images/stock-sample.png`,type:"webApp"},
        {pname: "VG Nexus", keywords:['Game Development','Community'], pgit: "https://github.com/JackRa88it/VG-Nexus", pweb: "https://vgnexus.com", pcat: 1, imgSrc: `/assets/images/vg-sample.png`,type:"webApp"},
        {pname: "Bamazon",keywords:['CLI','Node.js'], pgit: "Bamazon", pweb: "https://aarongoldsmith.github.io/Bamazon/", pcat: 1, imgSrc: undefined,type:"shell"},
        {pname: "Train Sim",keywords:['Firebase'], pgit: "Train-Time", pweb: "https://aarongoldsmith.github.io/Train-Time/", pcat: 1, imgSrc: "/assets/images/train-sample.png",type:"webApp"},
        {pname: "LIRI App", keywords:['Spotify','API','Node.js'], pgit: "liri-node-app", pweb: "https://aarongoldsmith.github.io/liri-node-app/", pcat: 1, imgSrc: undefined,type:"shell"},
        {pname: "Clicker Game",keywords:['React'], pgit: "charlie-game", pweb: "https://aarongoldsmith.github.io/charlie-game/", pcat: 1, imgSrc: `/assets/images/charlie-sample.png`,type:"webApp"},
        {pname: "Onion Scraper",keywords:['News Scraper','The Onion News'], pgit: "news-scraper", pweb: "https://whispering-dusk-64800.herokuapp.com/", pcat: 1, imgSrc: `/assets/images/news-sample.png`,type:"webApp"},
        {pname: "Memify gifs",keywords:['giphy','API'], pgit: "GIFTastic", pweb: "https://aarongoldsmith.github.io/GIFTastic/", pcat: 1, imgSrc: undefined,type:"webApp"},
        {pname: "Timed Trivia",keywords:['Quiz','setTimeout'], pgit: "TriviaGame", pweb: "https://aarongoldsmith.github.io/TriviaGame/", pcat: 1, imgSrc: undefined,type:"webApp"},
        {pname: "University Pathway",keywords:[], pgit: "", pweb: "/assets/papers/pathway.pdf", pcat: 3, imgSrc: undefined,type:"doc"},
        {pname: "Philosophy of CS",keywords:['Philosophy', 'Computer Science'], pgit: "", pweb: "/assets/papers/philosophyCS.pdf", pcat: 3, imgSrc: undefined,type:"doc"},
        {pname: "Eco Housing", keywords:['Eco'], pgit: "", pweb: "/assets/papers/Eco Housing.pdf", pcat: 3, imgSrc: undefined, type:"doc"},
        {pname: "Myanmar Politics", keywords:['Myanmar'], pgit: "", pweb: "/assets/papers/Myanmar.pdf", pcat: 3, imgSrc: undefined, type:"doc"},
        {pname: "Generative Art", keywords:['Generative','Art'], pgit: "", pweb: "/assets/papers/GenerativeArt.pdf", pcat: 3, imgSrc: undefined, type:"doc"},
        {pname: "Generative Art", keywords:['Generative','Art'], pgit: "GenerativeGold", pweb: "https://aarongoldsmith.github.io/GenerativeGold/", pcat: 2, imgSrc: undefined,type:"webApp"},
        {pname: "Python Networking", keywords:['talk.py','listen.py','diffiehellman'], pgit: "networking-labs", pweb: "https://aarongoldsmith.github.io/networking-labs/", pcat: 2, imgSrc: undefined, type: 'shell'},
        {pname: "CharStream Analysis", keywords:['generate','python','data'], pgit: "", pweb:"/assets/papers/CharStreamAnalysis.pdf", pcat: 2, imgSrc: undefined, type: 'doc'},
        {pname: "Bandwith Analysis", keywords:['lab','analysis','bandwith'], pgit: "", pweb: "/assets/papers/NetworkAnalysis.pdf", pcat: 2, imgSrc: undefined, type: 'doc'},
        {pname: "Graph Functions", keywords:['canvas','transformations','graphics'], pgit: "transformations", pweb: "https://aarongoldsmith.github.io/transformations", pcat: 2, imgSrc: undefined, type: 'webApp'},
        {pname: "Force Engine", keywords:['canvas','forces','graphics'], pgit: "ForceEngine", pweb: "https://aarongoldsmith.github.io/ForceEngine", pcat: 2, imgSrc: "/assets/images/forces.png", type: 'webApp'},
        {pname: "Game of Life", keywords:['game','gol','conway'], pgit: "game-of-life", pweb: "https://aarongoldsmith.github.io/game-of-life", pcat: 2, imgSrc: '/assets/images/gol.png', type: 'webApp'},
        {pname: "Multiplexer Lab", keywords:['Logic Design','COEN'], pgit: "", pweb: "/assets/papers/Multiplexer1.pdf", pcat: 2, imgSrc: undefined, type: 'doc'},
        {pname: "Multiplexer pt2", keywords:['Logic Design','COEN'], pgit: "", pweb: "/assets/papers/Multiplexer2.pdf", pcat: 2, imgSrc: undefined, type: 'doc'},
        {pname: "",keywords:[''], pgit: "", pweb: "", pcat: 4, imgSrc: `/assets/photography/IMG_01.jpg`,type:"photo"},
        {pname: "",keywords:[''], pgit: "", pweb: "", pcat: 4, imgSrc: `/assets/photography/IMG_02.jpg`,type:"photo"},
        {pname: "",keywords:[''], pgit: "", pweb: "", pcat: 4, imgSrc: `/assets/photography/IMG_04.jpg`,type:"photo"},
        {pname: "",keywords:[''], pgit: "", pweb: "", pcat: 4, imgSrc: `/assets/photography/IMG_09.jpg`,type:"photo"},
        {pname: "",keywords:[''], pgit: "", pweb: "", pcat: 4, imgSrc: `/assets/photography/IMG_07.jpg`,type:"photo"},
        {pname: "",keywords:[''], pgit: "", pweb: "", pcat: 4, imgSrc: `/assets/photography/IMG_10.jpg`,type:"photo"},
        {pname: "",keywords:[''], pgit: "", pweb: "", pcat: 4, imgSrc: `/assets/photography/IMG_08.jpg`,type:"photo"},
        {pname: "",keywords:[''], pgit: "", pweb: "", pcat: 4, imgSrc: `/assets/photography/IMG_03.jpg`,type:"photo"},
        {pname: "",keywords:[''], pgit: "", pweb: "", pcat: 4, imgSrc: `/assets/photography/IMG_06.jpg`,type:"photo"},
      ],
      sections: [
        {title:"Web Dev/CLI Apps", description: "These items were projects or assignments I submitted while attending the UC Berkeley Boot camp", cat: 1},
        {title:"Computer Science", description:"These are a variety of assignments, labs, and projects that I've worked on", cat: 2},
        {title:"University Papers", description: "These are various papers I wrote at Santa Clara University over the course of 4 years", cat: 3},
        {title:"Digital Photography", description: "All photographs are originals and were taken by Aaron Goldsmith ", cat: 4}
      ]
    })
  }
  render (){
    return (
    <div className="portfolio-page" id="page2" >
      <nav aria-labelledby='side navigation'>
        <ul className='side-nav' id='side'>
        <span> &nbsp;Portfolio</span>
          {
            // side-navigation
            this.state.sections.map((category,i) => (
              <a key={i} href={"#"+category.cat}>
                <li key={i} className="side-item">
                  <em>{category.title}</em>
                </li>
             </a>))
          }
        </ul>
      </nav>
      {
        this.state.selected?
        <Highlight 
           Project={this.getProject()} 
           clickHandler={this.handleClick} 
           description={this.getDescription()}
              />:<span></span>
        }
      {
        this.state.sections.map((category,i) => (
          <section key={i} className="narrow" id={category.cat}>
            <h1 className="cat-title">{category.title}</h1>
            <h3 className="cat-title">{category.description}</h3>

            <div className="flexy">
              {this.state.projects.map((proj,i) => (
                proj.pcat === category.cat?
                <Project key={i} project={proj} clickHandler={this.handleClick} />:''
              ))}
            </div>
          </section>

        ))
      }
    </div>
  );

  }
  
}
export default Portfolio;