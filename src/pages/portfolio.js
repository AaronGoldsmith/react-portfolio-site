import React from "react"
import Project from "../components/Project/Project"
class Portfolio extends React.Component{
  state = {
    sections: []
  }

  componentDidMount(){
    this.setState({
      // if using mongoDB, this will be where API gets called for data
      projects: [ 
        {pname: "Hangman Game",keywords:[], pgit: "hangman", pweb: "https://aarongoldsmith.github.io/hangman/", pcat: 1, imgSrc: "/assets/images/hangman-sample.png", type:"webApp", },
        {pname: "Stock Wars", keywords:['Simulation','Stock Market'], pgit: "stock-wars", pweb: "https://aqueous-brook-18608.herokuapp.com/", pcat: 1, imgSrc: `/assets/images/stock-sample.png`,type:"webApp"},
        {pname: "VG Nexus", keywords:['Game Development','Community'], pgit: "https://github.com/JackRa88it/VG-Nexus", pweb: "https://vgnexus.com", pcat: 1, imgSrc: `/assets/images/vg-sample.png`,type:"webApp"},
        {pname: "Train Scheduler",keywords:['Firebase'], pgit: "Train-Time", pweb: "https://aarongoldsmith.github.io/Train-Time/", pcat: 1, imgSrc: "/assets/images/train-sample.png",type:"webApp"},
        {pname: "Bamazon",keywords:['CLI','Node.js'], pgit: "Bamazon", pweb: "https://aarongoldsmith.github.io/Bamazon/", pcat: 1, imgSrc: `/assets/images/Bamazon.png`,type:"shell"},
        {pname: "LIRI App", keywords:['Spotify','API','Node.js'], pgit: "liri-node-app", pweb: "https://aarongoldsmith.github.io/liri-node-app/", pcat: 1, imgSrc: undefined,type:"shell"},
        {pname: "Clicker Game",keywords:['React'], pgit: "charlie-game", pweb: "https://aarongoldsmith.github.io/charlie-game/", pcat: 1, imgSrc: `/assets/images/charlie-sample.png`,type:"webApp"},
        {pname: "Onion Scraper",keywords:['News Scraper','The Onion News'], pgit: "news-scraper", pweb: "https://whispering-dusk-64800.herokuapp.com/", pcat: 1, imgSrc: `/assets/images/news-sample.png`,type:"webApp"},
        {pname: "Pathway",keywords:[], pgit: "", pweb: "/assets/papers/pathway.pdf", pcat: 2, imgSrc: undefined,type:"doc"},
        {pname: "Ethical CyberSec",keywords:['cyber-security'], pgit: "", pweb: "", pcat: 2, imgSrc: undefined,type:"doc"},
        {pname: "Math, Philosophy, & CS",keywords:['Philosophy', 'Computer Science'], pgit: "", pweb: "/assets/papers/philosophyCS.pdf", pcat: 2, imgSrc: undefined,type:"doc"},
        {pname: "Generative Art",keywords:['Generative','Art'], pgit: "", pweb: "/assets/papers/GenerativeArt.pdf", pcat: 2, imgSrc: undefined, type:"doc"},
        {pname: "Project UQE",keywords:[], pgit: "", pweb: "", pcat: 3, imgSrc: undefined,type:"webApp"},
        {pname: "Python Networking",keywords:[], pgit: "", pweb: "", pcat: 3, imgSrc: undefined, type: 'shell'}

      ],
      sections: [
        {title:"Web Dev", description: "These items were projects or assignments I submitted while attending the UC Berkeley Boot camp", cat: 1},
        {title:"University Papers", description: "These are various papers I wrote at Santa Clara University over the course of 4 years", cat: 2},
        {title:"CS Projects", description:"These are a variety of CS assignments and projects I have worked on", cat: 3},
        {title:"Photography", description: "Photography", cat: 4}
 
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
              <a href={"#"+category.cat}>
                <li className="side-item" key={i}>
                  <em>{category.title}</em>
                </li>
             </a>))
          }
        </ul>
        </nav>
        {
        this.state.sections.map((category,i) => (
          <section className="narrow" id={category.cat}>
            <h1 className="cat-title">{category.title}</h1>
            <h3 className="cat-title">{category.description}</h3>

            <div className="flexy">
              {this.state.projects.map((proj,i) => (
                proj.pcat === category.cat?
                <Project project={proj} key={i} />:<span></span>
              ))}
            </div>
          </section>

        ))}
      </div>
  );

  }
  
}
export default Portfolio;