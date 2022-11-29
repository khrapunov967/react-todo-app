import React  from "react";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import "./TodosContainer.scss";

const TodosContainer = () => {

    const todos = useSelector(state => state.todoSlice.todos)

    return (
        <section className="todos-container">
            {
                todos.map(todo => <TodoItem todo={todo} key={todo.id}/>)
            }
        </section>
    );
};

export default TodosContainer;