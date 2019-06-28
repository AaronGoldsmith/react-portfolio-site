import React from "react"
import PropTypes from "prop-types"
import Icon from "./Icon"
import { Brand } from "./Brand"
import "./FAb.css"
export const IconLink = ({ brand, type, ...props }) => {
  return (
    <a href={props.to} target="_self" >
      {brand ? <Brand to={props.to} brand={brand} title={`view on github`}/> : <Icon type={type} />}
    </a>)
};
IconLink.propTypes = {
  type: PropTypes.string,
  brand: PropTypes.string,
  to: PropTypes.string.isRequired
}