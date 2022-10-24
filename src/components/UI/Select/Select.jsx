import React from "react";
import "./Select.scss";

const Select = ({isVisible}) => {
    return (
        <div className={isVisible ? "select" : "select hidden"}>
            <div className="select__select-item">Completed</div>
            <div className="select__select-item">In Progress</div>
        </div>
    );
};

export default Select;