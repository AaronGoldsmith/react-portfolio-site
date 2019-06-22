import React from "react"
import {IconLink} from "../FA/IconLink"
import {SheetSV,ShellSV,CodeSV} from "../../SVIcons"
import "./Project.css"

export const Project = ({project,...props}) => (
  <div onClick={props.clickHandler} alt={project.pname} className={project.type==="photo"?"spacing":"small-space"}>
    <div className="project" onClick = {props.clickHandler}>
            <div className={project.type==="photo"?'img':"media"}>
                {project.imgSrc?
                    <img className='project-img' src={project.imgSrc} alt={project.pname} />:
                        project.type==='doc'?   <SheetSV/>:
                        project.type==='webApp'?<CodeSV/>:
                                                <ShellSV/>
                }
                
                    <div id="links">
                    {/* when user hovers over project, reveal links */}
                    {/* to only allow the images to link: !project.imgSrc */}
                        {project.pgit.length>1?<IconLink to={ 
                            //  check for 'https' --> orig repo
                            //  if string not found, link to my github
                            project.pgit.substring(0,5)!=='https'? "https://github.com/AaronGoldsmith/"+ project.pgit:
                            project.pgit} brand={'github'} type="brand" /> :''
                        }     
                        {project.pweb.length>0?<IconLink to={project.pweb} type="external-link-alt" />:''}            
                
                </div>
                </div>
            </div>    
            <h3 id="named"  >  {project.pname} </h3>
      
        <div>
        {/*  seo  */}
        <i hidden><em>{project.keywords.join(', ')}</em></i>
        </div>
        
    </div>
);
