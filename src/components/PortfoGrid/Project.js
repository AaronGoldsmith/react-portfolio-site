import React from "react"
import {IconLink} from "../FA/IconLink"

import "./Project.css"

const Project = ({project}) => (
    
    <div className="project">
        <div className="flexy"> 
        <h3 id="named">{project.pname}</h3>
        <span class="mt"><IconLink to={ 
            //  either tack on my github or link to the OG repo
               project.pgit.substring(0,5)!=='https'?
               "https://github.com/AaronGoldsmith/"+ project.pgit:
               project.pgit} brand={'github'} type="brand" />
        </span>
         
         </div>

        <div className="media">
            <img class='project-img' src={project.imgSrc?project.imgSrc:''} alt={project.pname} />
        </div>
        <div>
        <span hidden><em>{project.keywords.join(', ')}</em></span>
        </div>
        
    </div>
);
export default Project;