import React, { useContext } from "react";
import { Context } from "../../context";
import CloseButton from "../UI/CloseButton/CloseButton"
import "./CreateTodoForm.scss";

const CreateTodoForm = () => {

    const {state, dispatch} = useContext(Context);

    return (
        <form onKeyDown={(e) => dispatch({action: "createTodo", payload: {event: e}})} action="#" className={state.isCreateTodoFormVisible ? "create-todo-form" : "create-todo-form hidden"}>
            <CloseButton onClick={() => dispatch({type: "hideCreateTodoForm"})}/>
            <input 
                value={state.todoTitle}
                type="text" 
                placeholder="Todo title... (then press Enter)" 
                className="create-todo-form__todo-title-input"
                onChange={(e) => dispatch({type: "onChangeTodoTitle", payload: e.target.value})}
            />

            <button className="create-todo-form__create-button" onClick={(e) => dispatch({type: "createTodo", payload: e})}>
                Create
            </button>

        </form>
    );
};

export default CreateTodoForm;