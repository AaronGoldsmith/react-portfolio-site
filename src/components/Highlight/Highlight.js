import React from "react";
import "./Highlight.css"
import {Icon} from "../FA/Icon"
import Sheet from "../../icons/sheet"
import Shell from "../../icons/shell"
import Code from "../../icons/code"
import Cors from "./Cors"
// var request = require('request');
// var cheerio = require('cheerio');


// const getPage = (github) => {
//   request(github, function(err, resp, html) {
//           if (!err && resp.statusCode === 200){
//             const $ = cheerio.load(html);
//           //  let title = $('.markdown-body').children()[0].firstChild.next.data;
//           //  let des = $('.markdown-body').children()[1].firstChild.data;
//            let body = $('.markdown-body').children().slice(1)
//            let arr = [];
//            body.each(line => {
//              let sent = body[line].firstChild;
//              if(sent.data)
//               arr.push(body[line].firstChild.data)
//             });
//             return arr;
//             // console.log(title," : ",des);
//             // $("#result").append($("<h2>").html(des))
//          }});
// }

export const Highlight = ({Project,clickHandler,description}) => (
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
            </div>:<span></span>
        }
        <div>{description}</div>

      </div>
      
      

      {/* <Cors github={Project.pgit} /> */}

  </div>

);