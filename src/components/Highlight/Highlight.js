import React from "react";
import "./Highlight.css"
import {Icon} from "../FA/Icon"
import Sheet from "../../icons/sheet"
import Shell from "../../icons/shell"
import Code from "../../icons/code"
var request = require('request');
var cheerio = require('cheerio');


const getPage = (github) => {
  request(github, function(err, resp, html) {
          if (!err && resp.statusCode === 200){
            const $ = cheerio.load(html);
           let title = $('.markdown-body').children()[0];
           let des = $('.markdown-body').children().slice(1)

            title.children.forEach(child =>  console.log(child.type==="text"?child.data:"============") )
            console.log(des)

            des.map(p => console.log(des[p].childNodes.pop().data))
          }});
}

export const Highlight = ({Project,clickHandler}) => (
  <div className="Highlight">
      <h2 id="close" onClick={clickHandler} className="rightX"><Icon type="times"/></h2>
     <h2 className="card-header">{Project.pname}</h2>
      <div className = "content">
          {
            Project.imgSrc?
            <div id="img-cont">
              <img className='proj-img' 
                  title={Project.pname} 
                  src={Project.imgSrc} 
                  alt={Project.pname} />
            </div>:
            Project.type==='doc'?   <Sheet />:
            Project.type==='webApp'?<Code />:
                                    <Shell />
        }
      </div>
      {Project.pgit.indexOf("github")>0?
      getPage(`https://cors-anywhere.herokuapp.com/${Project.pgit}`):
      getPage(`https://cors-anywhere.herokuapp.com/https://github.com/AaronGoldsmith/${Project.pgit}`)
      }
  </div>

);