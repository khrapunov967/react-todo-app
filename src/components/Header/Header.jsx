import React from "react";
import MenuIcon from "../UI/MenuIcon/MenuIcon";
import "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__title">To-Do App</h1>

            <MenuIcon />
        </header>
    );
};

export default Header;