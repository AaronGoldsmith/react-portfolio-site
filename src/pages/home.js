import React, { Component } from 'react';
import myself from "../agoldsmith.jpg"
import Navtabs from "../components/Nav/Navtabs"
import {IconLink} from "../components/FA/IconLink"
import './pages.css';

class Home extends Component
{

  state = {
    scrolledDown:false,
    opened: false,
  }
  checkSticky = () =>{
    let nav = document.getElementById('side')

    if(window.scrollY>window.innerHeight-80){
      nav.classList.add('sticky');
    }
    else{
      nav.classList.remove('sticky')
    }
  }
  handleScroll = () => {
    let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

    this.checkSticky();
    

    if(scrollTop>=260)
      this.setState({scrolledDown:false})
    else
      this.setState({scrolledDown:true})
    
  }
  handleChevron = () => {
    if(window.scrollY>50){
      window.scrollTo(0,0)
    }
  }
  handleEnvelope = () =>
  {
    var email = document.getElementById('contact-email');
    email.href = '';
    var rqst = 'mailto:agoldsmith@alumni.scu.edu?body=Hey Aaron,%0D%0A'
    if(this.state.opened===true){
      if(window.confirm('You might have already sent an email. Want to start another anyway?')){
        email.href=rqst;
      }
    }
    else{
      email.href=rqst;
      this.setState({opened: true})
    }
  }
  componentDidMount(){
    this.setState({scrolledDown:true})
    window.addEventListener('scroll', this.handleScroll);

  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }
  render()
  {
    return (
      <div className="bg" id="app">
        <header className="App-header">
        <div className="social-wrap">
              <a id='contact-email' title='agoldsmith@alumni.scu.edu' onMouseUp={this.handleEnvelope} rel="noopener no referrer"  target='_blank' href="mailto:agoldsmith@alumni.scu.edu?body=Hey Aaron,%0D%0A">
                  <i className={`fas fa-envelope${this.state.opened?'-open':''}`} />
              </a>
              <div className="online-links light">
              <IconLink to="https://github.com/AaronGoldsmith" brand={'github'} type="brand" />
              <IconLink to="https://www.linkedin.com/in/aarongoldsmith-1" brand={'linkedin'} type="brand" />
              </div>
          </div>
          <div className="avatar fadeIn">
            <img src={myself} alt='Aaron Goldsmith'></img>
          </div>
          <h2 className="text-center myname fadeSlow">
            <span id="first">Aaron </span><br/><span id="last">Goldsmith</span>
          </h2>
          
          <Navtabs id="navigation" />
        </header>
        {((!this.state.scrolledDown)?<i onClick={this.handleChevron} className="fas fa-chevron-up"></i>:<i></i>)}

      </div>
    );
  }
}

export default Home;
