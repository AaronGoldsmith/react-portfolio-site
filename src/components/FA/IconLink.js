import React from "react"
import {Icon} from "./Icon"
import {Brand} from "./Brand"
import "./FA.css"
export const IconLink = (props) => (
    <a href={props.to} target="_blank" rel="noopener noreferrer">
    {props.type !== "brand"?
      <Icon type={props.type} />:
      <Brand type={props.brand} />
    }
  </a>
);