import React, { useContext } from "react";
import Select from "../Select/Select";
import { Context } from "../../../context";
import "./MenuButton.scss";

const MenuButton = () => {

    const {state, dispatch} = useContext(Context);

    return (
        <div className="menu-icon" onMouseEnter={() => dispatch({type: "menuHover", payload: true})} onMouseLeave={() => dispatch({type: "menuHover", payload: false})}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>

            <Select isVisible={state.isSideMenuVisible}/>
        </div>
    );
};

export default MenuButton;