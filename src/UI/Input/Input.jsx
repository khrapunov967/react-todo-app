import React from "react";
import "./Input.scss";

const Input = ({holder}) => {
    return (
        <input type="text" placeholder={holder} className="input"/>
    );
}

export default Input;