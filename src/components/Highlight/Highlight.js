/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import "./Highlight.css"
import PropTypes from "prop-types"
import Icon from "../FA/Icon";
import {IconLink} from "../FA/IconLink";

export const Highlight = ({Project,clickHandler,description}) => (
  <div className="Highlight">
        <h2 id="close" onClick={clickHandler} className="rightX"><Icon type="times"/></h2>
        
      
      <div className = "content">
          <div className="card-header">
            <h3>{Project.pname} </h3><span className="small">{Project.pweb.length>0?<IconLink to={Project.pweb} type="external-link-alt" />:''}</span>
          </div>
        <div id="rr">
          <ul>
          <li>{Project.pgit.length>1?<IconLink to={ 
                //  check for 'https' --> orig repo
                //  if string not found, link to my github
              Project.pgit.substring(0,5)!=='https'? "https://github.com/AaronGoldsmith/"+ Project.pgit:
              Project.pgit} brand={'github'} type="brand" /> :''
            } </li>
              {Project.keywords.map(word => 
                <li key={word}><em>{word}</em></li>
              )}</ul></div>
          {
            Project.imgSrc?
            <div id="img-cont">
              <img className='proj-img' 
                  title={Project.pname} 
                  src={Project.imgSrc} 
                  alt={Project.pname} />
            </div>:<span></span>
        }
        <div id="descript">
          <p>{description}</p>
        </div>
  
            </div>      
      
  </div>

);
Highlight.propTypes = {
  Project: PropTypes.object,
  clickHandler: PropTypes.func,
  description: PropTypes.string.isRequired
}