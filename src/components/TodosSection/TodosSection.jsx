import React from "react";
import Task from "../TodoItem/TodoItem";
import "./TodosSection.scss";

const TasksSection = ({todos, setTodos}) => {
    return (
        <section className="tasks-section">
            {
                !todos.length ? <p className="no-tasks">No Tasks!</p> 
                : todos.map(todo => <Task todo={todo} todos={todos} key={todo.id} setTodos={setTodos} />)
            }
        </section> 
    );
}

export default TasksSection;