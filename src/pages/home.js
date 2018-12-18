import React, { Component } from 'react';
import About from "./About"
import Portfolio from "./portfolio"
import Navtabs from "../components/Nav/Navtabs"
import {IconLink} from "../components/FA/IconLink"
import './pages.css';

class Home extends Component
{

  state = {
    scrolledDown:false,
    opened: false,
    page: "home"
  }
  checkSticky = () =>{
    let nav = document.getElementById('side')
    if(nav){
      if(window.scrollY>window.innerHeight-80){
        nav.classList.add('sticky');
        return true;
      }
      else{
        nav.classList.remove('sticky')
        return false;
      }
    }
  
  }
  handleScroll = () => {
    let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    // got a violation in console w/o this
    if(!this.checkSticky()){
      if(scrollTop>=260)
      this.setState({scrolledDown:false})
       else
      this.setState({scrolledDown:true})
    }

   
    
  }
  handleChevron = () => {
    let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

    if(scrollTop>50){
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
  handleClick = (nav) =>{
    this.setState({page:nav.target.className.split(' ')[1]});
    setTimeout(function(){
      let el = document.getElementById('page2');
      let height = window.innerHeight;
      if(el)  window.scrollTo(0,height)
    },100);
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
      <div>
        <div className="bg" id="app">
          <header className="App-header">
          <div className="social-wrap">
                
                <div className="online-links light">
                {/* eslint-disable-next-line */}
                <a id='contact-email' title='agoldsmith@alumni.scu.edu' onMouseUp={this.handleEnvelope} rel="noopener no referrer"  target='_blank' href="mailto:agoldsmith@alumni.scu.edu?body=Hey Aaron,%0D%0A">
                    <i className={`fas fa-envelope${this.state.opened?'-open':''}`} />
                </a>
                <IconLink to="https://github.com/AaronGoldsmith" brand='github' type="brand" />
                <IconLink to="https://www.linkedin.com/in/aarongoldsmith-1" className="normal" brand='linkedin' type="brand" />
                </div>
            </div>
            <div className="avatar fadeIn">
              <img src="assets/images/agoldsmith.jpg" alt='Aaron Goldsmith' id="profileImg"></img>
            </div>
            <h2 className="text-center myname fadeSlow">
              <span id="first">Aaron </span><br/><span id="last">Goldsmith</span>
            </h2>
            
            <Navtabs id="navigation" handleClick={this.handleClick} />
          </header>
          {((!this.state.scrolledDown)?<i onClick={this.handleChevron} className="fas fa-chevron-up"></i>:<i></i>)}
        </div>
        
          <div>
            {
            this.state.page==="intro"?        
              <About />              :
            this.state.page==="folio"?
              <Portfolio />: ""
            }
           </div>
        
      </div>
    );
  }
}

export default Home;
