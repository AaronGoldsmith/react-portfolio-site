import React from "react"
import PropTypes from "prop-types"
import Icon from "./Icon"
import {Brand} from "./Brand"
import "./FAb.css"
export const IconLink = ({brand,type,...props}) => {
  return (
    <a href={props.to} target="_self">
     {brand ? <Brand brand={brand} /> : <Icon type={type} />}
    </a>)
};
IconLink.propTypes = {
  type: PropTypes.func,
  brand: PropTypes.string,
  to: PropTypes.string.isRequired
}