import React, { useContext } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { Context } from "../../context";
import "./TodosContainer.scss";

const TodosContainer = () => {

    const {state} = useContext(Context);

    return (
        <section className="todos-container">
            {
                state.todos.map(todo => <TodoItem todo={todo} key={todo.id}/>)
            }
        </section>
    );
};

export default TodosContainer;