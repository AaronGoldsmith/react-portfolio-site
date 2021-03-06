/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react"
import PropTypes from 'prop-types'
import { IconLink } from "../FA/IconLink"
import { SheetSV, ShellSV, CodeSV } from "../../SVIcons"
import "./Project.css"

//  check for 'https' --> orig repo
//  if string not found, link to my github
function formatForGH(project) {
    return project.pgit.substring(0, 5) !== 'https' ? `https://github.com/AaronGoldsmith/${project.pgit}` : `${project.pgit}`
}

function getIcons(project){
    return (
    <div id="links">
    {/* when user hovers over project, reveal links */}
    {/* to only allow the images to link: !project.imgSrc */}
    {project.pgit.length > 1 &&
            <IconLink to={formatForGH(project)} brand={'github'} type="brand" /> 
    }
    </div>)
}
export const Project = ({ project, ...props }) => (
    <div onClick={() => { }} onKeyUp={props.clickHandler} alt={project.pname} className={project.type === "photo" ? "spacing" : "small-space"} role="region">
        <div className="project" onClick={props.clickHandler} >
            <div className={`img-wrap ${project.type}`}><div className={project.type === "photo" ? 'img' : "media"}>
                {project.imgSrc ?
                    <img className='project-img' src={project.imgSrc} alt={project.pname} /> :
                    project.type === 'doc' ? <SheetSV /> :
                        project.type === 'webApp' ? <CodeSV /> :
                            <ShellSV />
                }</div>               
            </div>
   
        </div>
            <h3 id="named"  > {project.pweb && <a href={project.pweb}>{project.pname} </a>} </h3>

        <div>
            {getIcons(project)}
            {/*  seo  */}
            <i aria-hidden="true" hidden><h4>{project.keywords.join(', ')}</h4></i>
        </div>

    </div>
);
Project.propTypes = {
    project: PropTypes.object,
    clickHandler: PropTypes.func.isRequired
};