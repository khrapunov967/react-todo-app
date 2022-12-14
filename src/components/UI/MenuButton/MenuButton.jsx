import React from "react";
import { useDispatch } from "react-redux";
import { showSelect, hideSelect } from "../../../store/selectSlice"; 
import Select from "../Select/Select";
import "./MenuButton.scss";

const MenuButton = () => {

    const dispatch = useDispatch();

    return (
        <div className="menu-icon" onMouseEnter={() => dispatch(showSelect())} onMouseLeave={() => dispatch(hideSelect())}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>

            <Select isVisible={false}/>
        </div>
    );
};

export default MenuButton;