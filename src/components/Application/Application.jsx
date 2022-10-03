import React from "react";
import Title from "../Title/Title";
import Form from "../../UI/Form/Form";

import "./Application.scss";

const Application = () => {
    return (
        <div className="todo">
            <Title titleName={"To-Do Application"}/>
            <Form />
        </div>
    );
}

export default Application;