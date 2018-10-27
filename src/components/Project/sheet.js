import React from "react";
const SVG = ({
  style = {
    stroke:"#000",
    fill: "none",
    strokeWidth: "2.4693",
    color:"#000000",
  },
  width = '100%',
  className = '',
  height = '100%',
  viewBox = '0 0 64 64'
}) =>
  <svg viewBox={viewBox} width={width} height={height} style={style} className={className} xmlns="http://www.w3.org/2000/svg">
  <g transform="matrix(1.0124 0 0 1.0124 -.37266 -.37266)" >
    <g transform="matrix(1.0384 0 0 1.0384 -1.1507 -1.1507)">
    <path d="m11.75 54.375v-48.75h27.688l8.812 8.813v39.937h-36.5z" display="block" fill={style.fill} stroke={style.stroke}  />
    <path d="m11.75 54.375v-48.75h27.688l8.812 8.813v39.937h-36.5z" color="#000000" display="block" fill="#fff" stroke="#000" />
    <path d="m39.437 14.438v-8.813l8.813 8.813h-8.813z" color="#000000" display="block" stroke="#000"/>
    </g>
    <path d="m17.21 32.165h25.58" fill="none" stroke="#000"  nodetypes="cc"/>
    <path d="m17.21 37.165h25.58" fill="none" stroke="#000"  nodetypes="cc"/>
    <path d="m17.21 42.165h25.58" fill="none" stroke="#000"  nodetypes="cc"/>
    <path d="m17.21 47.165h25.58" fill="none" stroke="#000"  nodetypes="cc"/>
    <path d="m17.21 27.165h25.58" fill="none" stroke="#000"  nodetypes="cc"/>
    <path d="m17.21 22.165h25.58" fill="none" stroke="#000"  nodetypes="cc"/>
  </g>
  </svg>;
export default SVG;