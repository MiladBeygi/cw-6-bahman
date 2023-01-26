import React from "react";
import './CardContainer.css';


function CardContainer(props) {
    return <div className="my-2 w-2/4 card-container " >{props.children}</div>
}
export default CardContainer;