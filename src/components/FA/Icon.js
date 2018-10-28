import React from "react"
import './FA.css'
export const Icon = props => {
  return <i className={`fas fa-${props.type} ${props.selected}`} aria-labelledby={props.type}/>
}
