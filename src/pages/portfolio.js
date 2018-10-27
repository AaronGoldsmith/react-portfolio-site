import React from "react"
import Project from "../components/PortfoGrid/Project"
import {Link} from "react-router-dom";
class Portfolio extends React.Component{
  state = {
    sections: []
  }

  componentDidMount(){
    this.setState({
      // if using mongoDB, this will be where API gets called for data
      projects: [ 
        {pname: "Hangman Game",keywords:[], pgit: "hangman", pweb: "https://aarongoldsmith.github.io/hangman/", pcat: 1, imgSrc: "/assets/images/hangman-sample.png"},
        {pname: "Stock Wars", keywords:['Simulation','Stock Market'], pgit: "stock-wars", pweb: "https://aqueous-brook-18608.herokuapp.com/", pcat: 1, imgSrc: `/assets/images/stock-sample.png`},
        {pname: "VG Nexus", keywords:['Game Development','Community'], pgit: "https://github.com/JackRa88it/VG-Nexus", pweb: "https://vgnexus.com", pcat: 1, imgSrc: `/assets/images/vg-sample.png`},
        {pname: "Train Scheduler",keywords:['Firebase'], pgit: "Train-Time", pweb: "https://aarongoldsmith.github.io/Train-Time/", pcat: 1, imgSrc: "/assets/images/train-sample.png"},
        {pname: "Bamazon",keywords:['CLI','Node.js'], pgit: "Bamazon", pweb: "https://aarongoldsmith.github.io/Bamazon/", pcat: 1, imgSrc: `/assets/images/Bamazon.png`},
        {pname: "LIRI App", keywords:['Spotify','API','Node.js'], pgit: "liri-node-app", pweb: "", pcat: 1, imgSrc: `/assets/images/node-sample.png`},
        {pname: "Clicker Game",keywords:['React'], pgit: "charlie-game", pweb: "https://aarongoldsmith.github.io/charlie-game/", pcat: 1, imgSrc: `/assets/images/charlie-sample.png`},
        {pname: "Onion Scraper",keywords:['News Scraper','The Onion News'], pgit: "news-scraper", pweb: "https://whispering-dusk-64800.herokuapp.com/", pcat: 1, imgSrc: `/assets/images/news-sample.png`},
        {pname: "Project FOP",keywords:[], pgit: "", pweb: "", pcat: 2, imgSrc: `https://loremflickr.com/250/250?random=${Math.floor(Math.random()*200)}`},
        {pname: "Project TRP",keywords:[], pgit: "", pweb: "", pcat: 3, imgSrc: `https://loremflickr.com/250/250?random=${Math.floor(Math.random()*200)}`},
        {pname: "Project OPP",keywords:[], pgit: "", pweb: "", pcat: 3, imgSrc: `https://loremflickr.com/250/250?random=${Math.floor(Math.random()*200)}`},
        {pname: "Project UQE",keywords:[], pgit: "", pweb: "", pcat: 3, imgSrc: `https://loremflickr.com/250/250?random=${Math.floor(Math.random()*200)}`},
        {pname: "Project MNO",keywords:[], pgit: "", pweb: "", pcat: 3, imgSrc: `https://loremflickr.com/250/250?random=${Math.floor(Math.random()*200)}`},

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
        {
        this.state.sections.map((category,i) => (
          <section className="narrow" id={category.cat}>
            <h1 className="cat-title">{category.title}</h1>
            <h3 className="cat-title">{category.description}</h3>

            <div className="flexy">
              {this.state.projects.map((proj,i) => (
                proj.pcat===category.cat?
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