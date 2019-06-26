import React from "react"
import PropTypes from "prop-types"
export const CodeSV =({
  width = "100%",
  height = "100%",
}) => (
     <svg width={width} height={height} version="1.1" viewBox={"90 90 360 450"} xmlns="http://www.w3.org/2000/svg">
      <g transform="rotate(25) translate(120 -552.36)" fill="none" stroke="#555" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38.966">
        <path d="m125.28 600.91-101.56 101.56 101.56 101.56" />
        <path d="m376.97 600.91 101.56 101.56-101.56 101.56" />
        <path d="m274.86 570.23-54.621 265.77" />
      </g>
    </svg>
);
CodeSV.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};