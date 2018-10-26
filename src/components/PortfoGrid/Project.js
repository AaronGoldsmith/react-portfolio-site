import React from "react"
import "./Project.css"
const Project = ({project}) => (
    <div className="project">
        <h3>{project.pname}</h3>
        <img src={project.imgSrc?project.imgSrc:''} alt={project.pname} />
    </div>
);
export default Project;