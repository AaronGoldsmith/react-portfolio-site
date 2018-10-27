import React from "react"
import {IconLink} from "../FA/IconLink"

import "./Project.css"

const Project = ({project}) => (
    
    <div className="project">
        <div className="flexy"> 
        <h3 id="named">{project.pname}</h3>
        <span className="mt"><IconLink to={ 
            //  either tack on my github or link to the OG repo
               project.pgit.substring(0,5)!=='https'?
               "https://github.com/AaronGoldsmith/"+ project.pgit:
               project.pgit} brand={'github'} type="brand" />
        </span>
         
         </div>
        <a href={project.pweb}>
            <div className="media">
                <img className='project-img' src={project.imgSrc?project.imgSrc:''} alt={project.pname} />
            </div>
        </a>

        <div>
        <span hidden><em>{project.keywords.join(', ')}</em></span>
        </div>
        
    </div>
);
export default Project;