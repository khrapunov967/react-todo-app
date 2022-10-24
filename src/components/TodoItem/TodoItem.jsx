import React from "react";
import CheckButton from "../UI/CheckButton/CheckButton";
import RemoveIcon from "../UI/RemoveIcon/RemoveIcon";
import "./TodoItem.scss";

const TodoItem = ({completed}) => {
    return (
        <div className="todo-item">
            <div className="todo-item__left-container">
                <CheckButton isChecked={completed} />

                <p className={completed ? "todo-item__todo-title completed" : "todo-item__todo-title"}>Build a modern To-do App</p>
            </div>

            <div className="todo-item__right-container">
                <RemoveIcon />
            </div>
        </div>
    );
};

export default TodoItem;