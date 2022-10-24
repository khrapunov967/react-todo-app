import React from "react";
import AddIcon from "../UI/AddIcon/AddIcon";
import "./CreateTodoButton.scss";

const CreateTodoButton = () => {
    return (
        <div className="create-todo-button">
            <AddIcon />

            <p className="create-todo-button__title">Create New Item</p>
        </div>
    );  
};

export default CreateTodoButton;