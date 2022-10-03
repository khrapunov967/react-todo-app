import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

import "./Form.scss";

const Form = () => {
    return (
        <form className="form">
            <Input holder={"task text..."}/>
            <Button buttonName={"Create"}/>
        </form>
    )
}

export default Form;