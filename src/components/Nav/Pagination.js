import React from "react"
import "./nav.css"

const PageNode = ({selected}) => (
    <div className={(`circle ${selected?'selected':''}`)} />
);

const PageNodeItems = ({n, index}) => {
    // let pageNodeList = []
    const arr = new Array(n).fill(0)
    return arr.map( (_, i) => <PageNode key={i} selected={index === i} />) ;
}


export const Pagination = (props) => {
return (
    <div className="anchorBottom">
        <div className="pagination">
                <PageNodeItems index={props.active} n={props.size} />
        </div>
</div>)
}

