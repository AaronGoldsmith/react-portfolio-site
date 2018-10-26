import React from "react"
import {Icon} from "./Icon"
import {Brand} from "./Brand"
export const IconLink = (props) => (
  
    <a className="App-link" href={props.to} target="_blank" rel="noopener noreferrer">
    {props.type !== "brand"?
      <Icon type={props.type} />:
      <Brand type={props.brand} />
    }
  </a>
);