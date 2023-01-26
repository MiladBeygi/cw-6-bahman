import React from "react";
import './Button.css';
function Button(props) {


    return <button className={props.className} onClick={props.onClick} style={{ backgroundColor: `${props.backgroundColor}` }}>{props.children}</button>
}
export default Button;