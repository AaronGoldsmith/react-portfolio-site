import React from 'react';
import {Card,CardContent} from "../components/PortfoCard/"


 class About extends React.Component {
   state = {
      cards: [],
   }

   componentDidMount() {
     this.setState({
      cards: [
        {
          title: 'Getting to know Aaron',
          index: 0,
          content: [
            ' Aaron is a creative and hard-working individual with a life-long love and fascination for technology',
            ' Prior to moving down to Santa Clara to attend University, Aaron lived in Oakland for the first eighteen years of his life',
            ' He had the privilege of attending smaller academic schools in Oakland, which he believes helped foster his mentality of creating “positive change” in the world'
          ]
        },
        {
          title:'Education',
          index: 0,
          content:[
            ' Aaron earned his degree in Computer Science from Santa Clara University in June, 2018.',
            ' This past summer, he attended a three month long Coding Boot Camp to gain experience working with a full stack, and establish a portfolio',
            ' He loves to design, build, and create tools and software that can be used and enjoyed by others. Technology has become the fabric through which people around the world connect and share ideas.',
            ' Aaron knows how fortunate he is to be developing software in such an exciting time that allows people to transcend the <em>typical</em> human experience'
          ]
        },
        {
          title:'Trusted & Responsible',
          index: 0,
          content:[
            ' Aaron first began a leadership role while attending Head-Royce School. He applied for a position on the school honor council and was accepted along with a number of students throughout the four grades. The Honor Council was created on behalf of the students so that administrators could have student insight on relevant issues coming to the upper school head of school.',
            ' Additionally, Aaron sat on the Judicial Board of his fraternity (Kappa Sigma) for three years while attending Santa Clara University. The Judicial board is an essential part of the fraternity because it enforces the rules that were created to keep us safe by administering disciplinary consequences to those who need it.',
            ' Aaron has always enjoyed working children. He worked as an instructor at ID Tech Camps - Stanford for a number of years before joining a tutoring company, Breakout Mentors, where he could taught students similar computer science topics and languages'
          ]
        }
      ]



     })
   }
  render(){
    return (
    <section id="intro">
    {/* CARD 1 */}
    {this.state.cards.map(card => (
      <Card title = {card.title} >
          <CardContent>
              {card.content[card.index]}
          </CardContent>
      </Card>

    ))}
    </section>
  );
  }

 }
 export default About;