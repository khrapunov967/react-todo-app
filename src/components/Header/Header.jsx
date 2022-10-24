import React from "react";
import MenuButton from "../UI/MenuButton/MenuButton";
import "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__title">To-Do App</h1>

            <MenuButton />
        </header>
    );
};

export default Header;