import React from 'react';
import {Card,CardContent} from "../components/PortfoCard/"
import {Pagination} from "../components/Nav/"
import "./pages.css"
// eslint-disable-next-line
 const regex = /[\[](.+)[\]][\(](.+)[\)]/;
 class About extends React.Component {
   state = {
      cards: [],
   }
   findandTransform(str){
     var str1 = str.split('[')[1]
     // eslint-disable-next-line
     var regex = /(.+)[\]][\(](.+)[\)]/
     return str1.replace(regex, '$1|$2').split('|')
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
            ' Prior to moving down to Santa Clara to attend College, Aaron lived in Oakland for the first eighteen years of his life',
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
          ]
        },
        {
          id: 4,
          title:'Work Experiences',
          index: 0,
          slides: 5,
          content:[
              'In 2014, The Head-Royce School administration asked several students to build a resource database for the school to use.',
              'A group of students, including Aaron, built the first version of the website in Drupal, and it has since gone through various iterations as current students continue to modify and upkeep the site:\n\n[https://hrsinstitute.github.io/theOH/theoh.html](HRS) ',
              'Aaron worked at iD Tech Camps - Stanford for two summers in college. In Dec. 2016 Aaron began teaching students to code with [https://breakoutmentors.com](Breakout Mentors).',
              'Aaron taught students how to code first in Scratch, and then in Java, Javascript, or Python. ',
              'In 2017 Aaron was an intern with the tech department at Bay Medical Management, LLC. He was responsible for creating HTML report templates, and developing an HL7 interface to bring in historic reports from two managed hospitals'
            ]
        }
      ]



     })
   }
  render(){
    return (
    <div id="page2">
      <nav aria-labelledby='side navigation'>
        <ul className='side-nav' id='side'>
        <span> &nbsp;<em>Introduction</em> </span>
          {this.state.cards.map((card,i) => (
            <a key={i} href={"#intro-"+(i+1)}>
            <li className="side-item"><em>{card.title}</em></li>
            </a>))}
      </ul>
     </nav>
    <div className = "narrow">
      {this.state.cards.map((card,i) => (
        <section key={'intro-'+i} id={'intro-'+(i+1)}>
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
            {/* display card content  check for [url](title) */}
            {
              card.content[card.index].match(regex)?(
                  <div>
                    {card.content[card.index].split(regex)[0]}
                     <a rel="noopener noreferrer" href ={this.findandTransform(card.content[card.index])[0]}>
                      { this.findandTransform(card.content[card.index])[1]}
                    </a>
                  </div>):
                  //  couldn't match regex, so show text
                  card.content[card.index]
                }
           </CardContent>
           <Pagination className="align-center" 
                       selected={card.index} 
                       size={this.linArr(card.slides)}/>
          
         </Card>
      </section>

    ))}
    </div>
    </div>
  )}

 }
 export default About;