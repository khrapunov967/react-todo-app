import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../../store/todoSlice";
import CheckButton from "../UI/CheckButton/CheckButton";
import RemoveIcon from "../UI/RemoveIcon/RemoveIcon";
import "./TodoItem.scss";

const TodoItem = ({todo}) => {

    const dispatch = useDispatch();

    return (
        <div className="todo-item">
            <div className="todo-item__left-container">
                <CheckButton 
                    checked={todo.completed} 
                    onClick={() => dispatch(toggleTodo({id: todo.id}))}
                />

                <p className={todo.completed ? "todo-item__todo-title completed" : "todo-item__todo-title"}>
                    {todo.title}
                </p>
            </div>

            <div className="todo-item__right-container">
                <RemoveIcon 
                    removeTodo={(e) => dispatch(removeTodo({id: todo.id}))}
                />
            </div>
        </div>
    );
};

export default TodoItem;