import React from "react";
import "./CheckButton.scss";

const CheckButton = ({checked, ...props}) => {
    return (
        <div className={checked ? "check-button" : "check-button unchecked"} {...props}>
            <div className="check-button__check-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
            </div>
        </div>
    );
};

export default CheckButton;