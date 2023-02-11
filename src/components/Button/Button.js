import React from "react";
import './Button.css'


const Button = ({ onLoadMore }) => {
    return (
        <button className="button" type="button" onClick={onLoadMore}>Load more</button>
    )
}

export default Button;