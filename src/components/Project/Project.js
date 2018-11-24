import React from "react"
// import {IconLink} from "../FA/IconLink"
import Sheet from "../../icons/sheet"
import Shell from "../../icons/shell"
import Code from "../../icons/code"
import "./Project.css"

export const Project = ({project,...props}) => (
  <div onClick={props.clickHandler} alt={project.pname} className={project.type==="photo"?"spacing":"small-space"}>
    <h3 id="named"  >  {project.pname} </h3>
    <div className="project" onClick = {props.clickHandler}>
            <div className={project.type==="photo"?'img':"media"}>
                {project.imgSrc?
                    <img className='project-img' src={project.imgSrc} alt={project.pname} />:
                        project.type==='doc'?   <Sheet/>:
                        project.type==='webApp'?<Code/>:
                                                <Shell/>
                }
                
                </div>
            </div>           
        <div>
        {/*  seo  */}
        <i hidden><em>{project.keywords.join(', ')}</em></i>
        </div>
        
    </div>
);
