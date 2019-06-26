import React from "react"
import PropTypes from "prop-types"
import './FAb.css'
const Icon = props => {
  return <i className={`fas fa-${props.type}`} aria-labelledby={props.type}/>
}
export default Icon

Icon.propTypes = {
  type: PropTypes.string.isRequired
};