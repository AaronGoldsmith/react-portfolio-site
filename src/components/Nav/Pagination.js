import React from "react"
import "./nav.css"
const Pagination = (props) => (
  
    <div className="pagination">
        {   
        props.size.map((card,i) => (
            <div key={i} className={(props.selected===i?'circle selected' :'circle')}></div>))
        }
    </div>
);

 export default Pagination;