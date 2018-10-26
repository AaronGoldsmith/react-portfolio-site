import React from "react"
import './FA.css'
export const Brand= props => {
  return <i className={`fab fa-${props.type}`} aria-content="link" />
}
