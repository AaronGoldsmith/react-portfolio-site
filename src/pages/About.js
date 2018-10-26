import React from 'react';
import {Card,CardContent} from "../components/PortfoCard/"
import Pagination from "../components/Nav/Pagination"
import "./pages.css"

 class About extends React.Component {
   state = {
      cards: [],
   }

   linArr = (n) => {
      let arr = [];
      for(var i = 0;i<n;i++){
        arr.push(i);
      }
      return arr;
  }
   handleCardChange = (cardBtn) => {
     let cardID = cardBtn.target.id
     let current = this.state.cards;
     let dir = cardBtn.target.className.split('-')[2];

     // select left or right arrow
     if(dir === 'right'){
       if(current[cardID].index >= (current[cardID].slides))
        current[cardID].index = 0;
       else
        current[cardID].index++;
     }
     else if(current[cardID].index >=0 )
     {
        current[cardID].index--;
     }
     this.setState({cards:current})
   }
   componentDidMount() {
     this.setState({
      cards: [
        {
          id: 1,
          title: 'Get to know Aaron',
          index: 0,
          slides: 3,
          content: [
            ' Aaron is a creative and hard-working individual with a life-long love and fascination for technology',
            ' Prior to moving down to Santa Clara to attend University, Aaron lived in Oakland for the first eighteen years of his life',
            ' He had the privilege of attending smaller academic schools in Oakland, which he believes helped foster his mentality of creating “positive change” in the world'
          ]
        },
        {
          id: 2,
          title:'His Education',
          index: 0,
          slides: 4,
          content:[
            ' Aaron earned his degree in Computer Science from Santa Clara University in June, 2018.',
            ' This past summer, he attended a three month long Coding Boot Camp to gain experience working with a full stack, and establish a portfolio',
            ' He loves to design, build, and create tools and software that can be used and enjoyed by others. Technology has become the fabric through which people around the world connect and share ideas.',
            ' Aaron knows how fortunate he is to be developing software in such an exciting time that allows people to transcend the typical human experience'
          ]
        },
        {
          id: 3,
          title:'Trusted & Responsible',
          index: 0,
          slides: 4,
          content:[
            ' Aaron first began a leadership role while attending High School at Head-Royce. He applied for a position on the school honor council and was accepted along with a number of students throughout the four grades.',
            ' The Honor Council was created on behalf of the students so that administrators could have student insight on relevant issues coming to the upper school head of school.',
            ' Additionally, Aaron sat on the Judicial Board of his fraternity (Kappa Sigma) for three years while attending Santa Clara University. The Judicial board is an essential part of the fraternity because it enforces the rules that were created to keep us safe by administering disciplinary consequences to those who break the rules or guidelines.',
            ' Aaron has always enjoyed working children. He worked as an instructor at ID Tech Camps - Stanford for a number of years before joining a tutoring company, Breakout Mentors, where he could taught students similar computer science topics and languages'
          ]
        },
        {
          id: 4,
          title:'Work Experiences',
          index: 0,
          slides: 1,
          content:[
            ' Aaron did work'
          ]
        }
      ]



     })
   }
  render(){
    return (
    <div id="page2">
      <nav aria-label='side navigation'>
        <ul className='side-nav' id='side'>
        <span> &nbsp;<em>Introduction</em> </span>
          {this.state.cards.map((card,i) => (
            <a href={"#intro-"+(i+1)}>
            <li className="side-item" key={i}><em>{card.title}</em></li>
            </a>))}
      </ul>
     </nav>
    <div class = "narrow">
      {this.state.cards.map((card,i) => (
        <section id={'intro-'+(i+1)}>
        <Card title={card.title} key={card.title} >
        {/* conditionally render left/right icons */}
              {(card.index<card.slides-1?
                <i onClick={this.handleCardChange} id={i} className="fa fa-caret-right"></i>:
                <span></span>)}
                
                {(card.index>0?
                <i onClick={this.handleCardChange} id={i} className="fa fa-caret-left"></i>:
                <span></span>)
            }
            <CardContent>
            {/* display card content */}
              { card.content[card.index]} 
           </CardContent>
           <Pagination className="align-center" 
                       selected={card.index} 
                       size={this.linArr(card.slides)}/>
          
         </Card>
      </section>

    ))}
    </div>
    </div>
  );
  }

 }
 export default About;