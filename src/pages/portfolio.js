import React from "react"
import {Project} from "../components/Project"
import {Highlight} from "../components/Highlight/Highlight"
class Portfolio extends React.Component{
  state = {
    sections: [],
    descriptions: [],
    selected: undefined
  }
  getProject = () =>{
    // console.log('trying to find ' + this.state.selected)
    return this.state.projects.find(p => p.pname===this.state.selected)
  }
  getDescription = () => {
    return this.state.descriptions[this.state.selected];
  }
  closeInfo = () => {
    this.setState({selected: undefined})
  }
  handleClick = (btn) => {
    let named = btn.target.alt
    if(btn.target.classList.contains("img")){
      document.getElementsByClassName('img')[0].classList.remove('activated');
    }
    else{
      this.setState({selected: named});
    }
  
  }
  componentDidMount(){
    this.setState({
      descriptions: {
        "Hangman": "A classic hangman game! The goal of the game is to determine the secret word before your player dies. Each incorrect guess results in a limb getting added to your animated character",
        "Stock Wars": "Stock Wars is an application where users are able to compete with their friends using \"fake money\" by investing in the real the stock market. Users may choose how cash to start off with and then can track their progress as they research and invest in the US stock market. The stock simulator was built as a group project and is intended to be used for educational purposes",
        "VG Nexus": "Video Game Nexus is a place for people to play, upload, share, and discuss javascript-based web games. You do not need an account to play games here, but if you choose to make an account, you can participate in our Forum and upload your own games. This website is a passion project for us; we are all about learning and helping each other become better at making websites and games, and we would like to extend an invitation to you to join us.",
        "Bamazon": "CLI for simulating a shopping experience",
        "Train Sim": "",
        "LIRI App": "The node application can take in 1 of 4 commands. `concert-this <band>` - Takes in one argument, the name of the band. `spotify-this-song <song>` - expects the title of a song and will return information along witha a 30s preview. `movie-this <movie>` - Expects a movie title, and will return the plot summary along with actors, year, etc. `do-what-it-says` - takes in no arguments, but expects a text file called “random.txt” to include the function and its respective parameter",
        "Clicker Game": "",
        "Onion Scraper": "Web Scraper for the Onion News Network",
        "Memify gifs": "Add a gif button, then add memes"
      },
      // if using mongoDB, this will be where API gets called for data
      projects: [ 
        {pname: "Hangman",keywords:["2D canvas", "Game Design","Bootstrap", "p5.js"], pgit: "hangman", pweb: "https://aarongoldsmith.github.io/hangman/", pcat: 1, imgSrc: "/assets/images/hangman-sample.png", type:"webApp" },
        {pname: "Stock Wars", keywords:['Simulation','Stock Market','handlebrs'], pgit: "stock-wars", pweb: "https://aqueous-brook-18608.herokuapp.com/", pcat: 1, imgSrc: `/assets/images/stock-sample.png`,type:"webApp"},
        {pname: "VG Nexus", keywords:['Game Development','AWS','React','User Authentication'], pgit: "https://github.com/JackRa88it/VG-Nexus", pweb: "https://vgnexus.com", pcat: 1, imgSrc: `/assets/images/vg-sample.png`,type:"webApp"},
        {pname: "Bamazon",keywords:['CLI','Node.js'], pgit: "Bamazon", pweb: "https://aarongoldsmith.github.io/Bamazon/", pcat: 1, imgSrc: undefined,type:"shell"},
        {pname: "Train Sim",keywords:['Firebase'], pgit: "Train-Time", pweb: "https://aarongoldsmith.github.io/Train-Time/", pcat: 1, imgSrc: "/assets/images/train-sample.png",type:"webApp"},
        {pname: "LIRI App", keywords:['Spotify API','Node.js'], pgit: "liri-node-app", pweb: "https://aarongoldsmith.github.io/liri-node-app/", pcat: 1, imgSrc: undefined,type:"shell"},
        {pname: "Clicker Game",keywords:['React.js','Digital Photography'], pgit: "charlie-game", pweb: "https://aarongoldsmith.github.io/charlie-game/", pcat: 1, imgSrc: `/assets/images/charlie-sample.png`,type:"webApp"},
        {pname: "Onion Scraper",keywords:['Cheerio','The Onion News'], pgit: "news-scraper", pweb: "https://whispering-dusk-64800.herokuapp.com/", pcat: 1, imgSrc: `/assets/images/news-sample.png`,type:"webApp"},
        {pname: "Memify gifs",keywords:['Giphy API','Bootstrap'], pgit: "GIFTastic", pweb: "https://aarongoldsmith.github.io/GIFTastic/", pcat: 1, imgSrc: undefined,type:"webApp"},
        {pname: "Timed Trivia",keywords:['Timed Quiz','Interval/Timeouts'], pgit: "TriviaGame", pweb: "https://aarongoldsmith.github.io/TriviaGame/", pcat: 1, imgSrc: undefined,type:"webApp"},
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
        {pname: "",keywords:[''], pgit: "", pweb: "https://agoldsmith.exposure.co/", pcat: 4, imgSrc: `/assets/photography/IMG_05.jpg`,type:"photo"},
        {pname: "",keywords:[''], pgit: "", pweb: "https://agoldsmith.exposure.co/", pcat: 4, imgSrc: `/assets/photography/IMG_01.jpg`,type:"photo"},
      ],
      sections: [
        {title:"Development Projects", description: "These items were projects or assignments I submitted while attending the UC Berkeley Boot camp", cat: 1},
        {title:"Computer Science", description:"These are a variety of assignments, labs, and projects that I've worked on", cat: 2},
        {title:"University Papers", description: "These are various papers I wrote at Santa Clara University over the course of 4 years", cat: 3},
        {title:"Digital Photography", description: "Original Photography By Aaron Goldsmith", cat: 4}
      ]
    })
  }
  render (){
    const PHOTO = "Digital Photography"
    return (
    <div className="portfolio-page" id="page2" >
      <nav aria-labelledby='side navigation'>
        <ul className='side-nav' id='side'>
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
           clickHandler={this.closeInfo} 
           description={this.getDescription()}
              />:<span></span>
        }
      {
        this.state.sections.map((category,i) => (
          <section key={i} className="narrow" id={category.cat}>
            <h1 className="cat-title">{category.title}</h1>
            <h3 className="cat-title">{category.description}</h3>

            <div className={`${category.title !== PHOTO ? "flexy" : "table"}`}>
              {this.state.projects.map((proj,i) => (
                proj.pcat === category.cat?
                <Project key={i} project={proj} clickHandler={this.handleClick} />:''
              ))}       
            </div>
          </section>
          
        )
        
        )
      }
      <p className='centered'>This website is work of Aaron Goldsmith</p>
      <small>Site development ongoing. Last deployment: <em>6/21/2019</em></small>

    </div>
  );

  }
  
}
export default Portfolio;