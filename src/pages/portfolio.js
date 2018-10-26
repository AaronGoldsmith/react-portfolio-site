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
        {pname: "Hangman", pdate: "", pgit: "", pweb: "", pcat: 1, imgSrc: `https://loremflickr.com/250/250?random=${200+Math.floor(Math.random()*200)}`},
        {pname: "Train Time", pdate: "", pgit: "", pweb: "", pcat: 1, imgSrc: `https://loremflickr.com/250/250?random=${Math.floor(Math.random()*200)}`},
        {pname: "VG Nexus", pdate: "", pgit: "", pweb: "", pcat: 1, imgSrc: `https://loremflickr.com/250/250?random=${Math.floor(Math.random()*200)}`},
        {pname: "Stock Wars", pdate: "", pgit: "", pweb: "", pcat: 1, imgSrc: `https://loremflickr.com/250/250?random=${Math.floor(Math.random()*200)}`},
        {pname: "Clicky Game", pdate: "", pgit: "", pweb: "", pcat: 1, imgSrc: `https://loremflickr.com/250/250?random=${Math.floor(Math.random()*200)}`},
        {pname: "Project TXB", pdate: "", pgit: "", pweb: "", pcat: 1, imgSrc: `https://loremflickr.com/250/250?random=${Math.floor(Math.random()*200)}`},
        {pname: "Project JJC", pdate: "", pgit: "", pweb: "", pcat: 1, imgSrc: `https://loremflickr.com/250/250?random=${Math.floor(Math.random()*200)}`},
        {pname: "Project GYI", pdate: "", pgit: "", pweb: "", pcat: 1, imgSrc: `https://loremflickr.com/250/250?random=${Math.floor(Math.random()*200)}`},
        {pname: "Project FOP", pdate: "", pgit: "", pweb: "", pcat: 2, imgSrc: `https://loremflickr.com/250/250?random=${Math.floor(Math.random()*200)}`},
        {pname: "Project TRP", pdate: "", pgit: "", pweb: "", pcat: 3, imgSrc: `https://loremflickr.com/250/250?random=${Math.floor(Math.random()*200)}`},
        {pname: "Project OPP", pdate: "", pgit: "", pweb: "", pcat: 3, imgSrc: `https://loremflickr.com/250/250?random=${Math.floor(Math.random()*200)}`},
        {pname: "Project UQE", pdate: "", pgit: "", pweb: "", pcat: 3, imgSrc: `https://loremflickr.com/250/250?random=${Math.floor(Math.random()*200)}`},
        {pname: "Project MNO", pdate: "", pgit: "", pweb: "", pcat: 3, imgSrc: `https://loremflickr.com/250/250?random=${Math.floor(Math.random()*200)}`},

      ],
      sections: [
        {title:"Web Dev", description: "These items were projects or assignments I submitted while attending the UC Berkeley Boot camp", cat: 1},
        {title:"University Papers", description: "These are various papers I wrote at Santa Clara University over the course of 4 years", cat: 2},
        {title:"CS Projects", description:"These are a variety of CS assignments and projects I have worked on", cat: 3}
       ]
    })
  }
  render (){
    return (
    <div className="portfolio-page" id="page2" >
        <ul className='side-nav' id='side'>
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