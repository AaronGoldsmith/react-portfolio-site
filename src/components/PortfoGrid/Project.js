import React from "react"
import "./Project.css"

const Project = ({project}) => (
    
    <div className="project">
        <h3>{project.pname}</h3>
        <div className="media">
            <img class='project-img' src={project.imgSrc?project.imgSrc:''} alt={project.pname} />
        </div>
        <div>
           <a href="#" >Read more...</a>
        </div>
        
    </div>
);
export default Project;