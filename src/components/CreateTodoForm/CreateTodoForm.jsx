import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideForm } from "../../store/createTodoFormSlice";
import { addTodo } from "../../store/todoSlice";
import CloseButton from "../UI/CloseButton/CloseButton"
import "./CreateTodoForm.scss";

const CreateTodoForm = () => {

    const [title, setTitle] = useState("");
    const isFormVisible = useSelector(state => state.createTodoFormSlice.isFormVisible);
    const dispatch = useDispatch();

    const createNewTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo({title}));
        dispatch(hideForm());
        setTitle("");
    };

    const closeForm = () => {
        dispatch(hideForm());
        setTitle("");
    };

    return (
        <form action="#" className={isFormVisible ? "create-todo-form" : "create-todo-form hidden"}>
            <CloseButton 
                onClick={closeForm}
            />

            <input 
                value={title}
                type="text" 
                placeholder="Todo title... (then press Enter)" 
                className="create-todo-form__todo-title-input"
                onChange={(e) => setTitle(e.target.value)}
            />

            <button className="create-todo-form__create-button" onClick={createNewTodo}>
                Create
            </button>

        </form>
    );
};

export default CreateTodoForm;