import React, { useState } from "react";
import PropTypes from "prop-types"
import PlusMinus from "../../SVIcons/PlusMinus"
import "./Card.css"

export function CardContent({ children }){
  return (
  <div className="card-content" >
    {children}
  </div>)


}

const ExpandedView = ({ expanded, children }) =>
    expanded && <div className="fade-fast">{children}</div>;

export const Card = ({title, children}) => {
  const [open, setOpen] = useState(false)

 const toggleOpen =() =>{
    setOpen(!open)
  }
 

  return (
    <div className={`card ${open?'open':'closed'}`} id="sy">
        <h2 className="card-title text-center"> {title}</h2>
        <PlusMinus handleClick={toggleOpen} expanded={open}/>
        <ExpandedView expanded={open} >
          
          {children}
        </ExpandedView> 
        <div className='card-footer' />
      </div>)

}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
ExpandedView.propTypes = {
    expanded: PropTypes.bool.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}
PlusMinus.propTypes = {
  handleClick: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired
}
CardContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
]).isRequired
}