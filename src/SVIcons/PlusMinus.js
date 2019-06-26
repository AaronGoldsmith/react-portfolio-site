import React from "react";
import PropTypes from "prop-types"

const plus = "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
const minus = "M19,13H5V11H19V13Z";

const PlusMinus = (props) => (
  
    <div className="icon" onClick={props.handleClick} onKeyUp={props.handleClick} role="button" tabIndex={-1}>
        <svg width={24} height={24} viewBox="0 0 24 24">
        <path
            opacity={props.opacity || 1}
            fill={props.color || "#000"}
            d={props.expanded ? minus : plus}
        />
        </svg>
    </div>
    );
export default PlusMinus;


PlusMinus.propTypes = {
    opacity: PropTypes.string,
    color: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
    expanded: PropTypes.bool.isRequired
  };