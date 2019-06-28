import React from 'react';
import { Card, CardContent } from "../components/PortfoCard/"
import { Pagination } from "../components/Nav/"
import { cards } from '../config/text'
import "./pages.css"
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// eslint-disable-next-line
const regex = /[\[](.+)[\]][\(](.+)[\)]/;
class About extends React.Component {
  state = {
    cards: [],
  }
  findandTransform(str) {
    var str1 = str.split('[')[1]
    // eslint-disable-next-line
    var regex = /(.+)[\]][\(](.+)[\)]/
    return str1.replace(regex, '$1|$2').split('|')
  }

  // return an array of n integers
  // from 0 to n01
  linArr = (n) => {
    let arr = [];
    for (var i = 0; i < n; i++) {
      arr.push(i);
    }
    return arr;
  }
  
  handleCardChange = (cardBtn) => {
    let cardID = cardBtn.target.id
    let current = this.state.cards;
    let dir = cardBtn.target.className.split('-')[2];

    // select left or right arrow
    if (dir === 'right') {
      if (current[cardID].index >= (current[cardID].slides))
        current[cardID].index = 0;
      else
        current[cardID].index++;
    }
    else if (current[cardID].index >= 0) {
      current[cardID].index--;
    }
    this.setState({ cards: current })
  }
  componentDidMount() {
    this.setState({cards});

  }
  render() {
    return (
      <div id="page2">
        <div className="narrow">
          {this.state.cards.map((card, i) => (
            <section key={'intro-' + i} id={'intro-' + (i + 1)}>
              <Card title={card.title} key={card.title} >
                {/* conditionally render left/right icons */}
                {(card.index < card.slides - 1 ?
                  <i onClick={this.handleCardChange} id={i} className="fa fa-caret-right"></i> :
                  <span></span>)}

                {(card.index > 0 ?
                  <i onClick={this.handleCardChange} id={i} className="fa fa-caret-left"></i> :
                  <span></span>)
                }
                <CardContent>
                  {/* display card content  check for [url](title) */}
                  {
                    card.content[card.index].match(regex) ? (
                      <div>
                        {card.content[card.index].split(regex)[0]}
                        <a rel="noopener noreferrer" href={this.findandTransform(card.content[card.index])[0]}>
                          {this.findandTransform(card.content[card.index])[1]}
                        </a>
                      </div>) :
                      //  couldn't match regex, so show text
                      card.content[card.index]
                  }
                </CardContent>
                <Pagination className="align-center"
                  active={card.index}
                  size={card.slides}
                />

              </Card>
            </section>

          ))}
        </div>
      </div>
    )
  }

}
export default About;