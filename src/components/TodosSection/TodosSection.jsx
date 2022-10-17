import React from "react";
import Task from "../TodoItem/TodoItem";
import "./TodosSection.scss";

const TasksSection = ({todos, setTodos}) => {
    return (
        <section className="todos-section">
            {
                (todos && todos.length) ?  todos.map(todo => <Task todo={todo} todos={todos} key={todo.id} setTodos={setTodos} />)
                                        :  <p className="no-tasks">No Todos!</p>
            }
        </section> 
    );
}

export default TasksSection;