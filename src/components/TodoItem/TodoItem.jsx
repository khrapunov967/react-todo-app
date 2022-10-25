import React, { useContext } from "react";
import CheckButton from "../UI/CheckButton/CheckButton";
import RemoveIcon from "../UI/RemoveIcon/RemoveIcon";
import {Context} from "../../context";
import "./TodoItem.scss";

const TodoItem = ({todo}) => {

    const {dispatch} = useContext(Context);

    return (
        <div className="todo-item">
            <div className="todo-item__left-container">
                <CheckButton 
                    isChecked={todo.completed} 
                    onClick={() => dispatch({type: "completeTodo", payload: {id: todo.id, val: !todo.completed}})}/>

                <p className={todo.completed ? "todo-item__todo-title completed" : "todo-item__todo-title"}>{todo.title}</p>
            </div>

            <div className="todo-item__right-container">
                <RemoveIcon removeTodo={() => dispatch({type: "removeTodo", payload: todo.id})}/>
            </div>
        </div>
    );
};

export default TodoItem;