import React from "react";
import Button from "../Buttons/Buttons";
function Card(props) {
    return <div className="card" id={props.id}>
        <p className="">{props.title}</p>
        <p className="">{props.description}</p>
        <p className="">{props.fullDescription}</p>
        <div>
            <Button>Edit Item</Button>
            <Button>Delete Item</Button>
        </div>
    </div>
}
export default Card;