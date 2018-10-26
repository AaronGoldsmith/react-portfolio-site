import React from "react"
import "./Project.css"

const Project = ({project}) => (
    
    <div className="project">
        <h3>{project.pname}</h3>
        <img class='project-img' src={project.imgSrc?project.imgSrc:''} alt={project.pname} />
        <div>
           <a href="#" >Read more...</a>
        </div>
        <p id="parg" hidden>[00/00/0000] <br />
           [DESCRIPTION] - <br />
           Indiv/Group: - <br />
           Repo: - <br />
        </p>
    </div>
);
export default Project;