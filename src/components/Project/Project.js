import React from "react"
import {IconLink} from "../FA/IconLink"
import Sheet from "./icons/sheet"
import Shell from "./icons/shell"
import Code from "./icons/code"
import "./Project.css"

const Project = ({project}) => (
    
    <div className="project">
        <div className="flexy"> 
        <h3 id="named">{project.pname}</h3>
        <span className="mt">
        {
            // first checking to see if any link provided at all
            project.pgit.length>1?
                <IconLink to={ 
            //  check for 'https' --> orig repo
            //  if string not found, link to my github
               project.pgit.substring(0,5)!=='https'?
               "https://github.com/AaronGoldsmith/"+ project.pgit:
               project.pgit} brand={'github'} type="brand" />

            :<span></span>
        }
        </span>
         
         </div>
        <a href={project.pweb} >
            <div className="media">
                {project.imgSrc?
                    <img className='project-img' title={project.pname} src={project.imgSrc} alt={project.pname} />:
                        project.type==='doc'?   <Sheet />:
                        project.type==='webApp'?<Code />:
                                                <Shell />
                    }
            </div>
        </a>

        <div>
        {/*  seo  */}
        <i hidden><em>{project.keywords.join(', ')}</em></i>
        </div>
        
    </div>
);
export default Project;