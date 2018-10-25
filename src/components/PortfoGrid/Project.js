import React from "react"

const Project = (props) => (
    <div>
        <h3>{props.title}</h3>
        <img src={props.imgSrc} alt={props.title} />
        <p> Here is a little bit of text</p>
    </div>
);
export default Project;