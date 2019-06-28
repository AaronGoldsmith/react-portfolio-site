import React from "react"
import PropTypes from "prop-types"
import './FAb.css'
export const Brand = props => {
   return <i className={`fab fa-${props.brand}`} aria-labelledby={`brand ${props.brand}`} {...props} />
}
Brand.propTypes = {
  brand: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};