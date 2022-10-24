import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodosContainer.scss";

const TodosContainer = () => {
    return (
        <section className="todos-container">
            <TodoItem completed={true} />
            <TodoItem completed={false} />
            <TodoItem completed={false} />
        </section>
    );
};

export default TodosContainer;