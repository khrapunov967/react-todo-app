import React from "react";
import "./Title.scss";

const Title = ({titleName}) => {
    return (
        <p className="title">{titleName}</p>
    );
}

export default Title;