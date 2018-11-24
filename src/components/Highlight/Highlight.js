import React from "react";
import "./Highlight.css"
import {Icon} from "../FA/Icon";
import {IconLink} from "../FA/IconLink";

export const Highlight = ({Project,clickHandler,description}) => (
  <div className="Highlight">
      <div>
        <h2 id="close" onClick={clickHandler} className="rightX"><Icon type="times"/></h2>
        <div className="card-header">
        <h2>{Project.pname} </h2><span class="small">{Project.pweb.length>0?<IconLink to={Project.pweb} type="external-link-alt" />:''}</span>
        </div>
        <div className="linkable">
             
      </div>
      
      <div className = "content">
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
            </div>
      </div>
      
      
  </div>

);