import React from "react"
import {IconLink} from "../FA/IconLink"
import Sheet from "./icons/sheet"
import Shell from "./icons/shell"
import Code from "./icons/code"
import "./Project.css"

const Project = ({project,...props}) => (
  <div onClick={props.clickHandler} className={project.type==="photo"?"spacing":"small-space"}>
    <h3 id="named">  {project.pname} </h3>
    <div className="project">
            <div className={project.type==="photo"?'img':"media"}>
                {project.imgSrc?
                    <img className='project-img' title={'(Click to enlarge)\n   '+project.pname} src={project.imgSrc} alt={project.pname} />:
                        project.type==='doc'?   <Sheet />:
                        project.type==='webApp'?<Code />:
                                                <Shell />
                }
                <div className="linkable">
                  {project.pweb.length>0?
                    <IconLink to={project.pweb} type="external-link-alt" />:''
                  }
                  {project.pgit.length>1?
                    <IconLink to={ 
                    //  check for 'https' --> orig repo
                    //  if string not found, link to my github
                  project.pgit.substring(0,5)!=='https'?
                  "https://github.com/AaronGoldsmith/"+ project.pgit:
                  project.pgit} brand={'github'} type="brand" /> :''
                } 
                </div>
            </div>           
        <div>
        {/*  seo  */}
        <i hidden><em>{project.keywords.join(', ')}</em></i>
        </div>
        
    </div>
    </div>
);
export default Project;