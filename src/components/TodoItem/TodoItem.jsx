import React from "react";
import "./TodoItem.scss";

const Task = ({todos, todo, setTodos}) => {

    const completeTodo = (id) => {
        const updatedTodos = todos.map(currTodo => {
            if (currTodo.id === id) {
                return {...currTodo, completed: true};
            }

            return currTodo;
        });

        sortTodosByStatus(updatedTodos);
    };  

    const removeTodo = (id) => {
        setTodos(todos.filter(currTodo => currTodo.id !== id));
    };

    const sortTodosByStatus = (todos) => {
        const sortedTodos = todos.reduce((sorted, currTodo) => {
            if (currTodo.completed) {
                sorted.finished.push(currTodo);
            } else {
                sorted.unfinished.push(currTodo);
            }

            return sorted;
            
        }, {unfinished: [], finished: []});

        setTodos([...sortedTodos.unfinished, ...sortedTodos.finished]);
    };

    return (
        <div className={!todo.completed ? "todo" : "todo completed"}>
            <div className="todo__name">{todo.title}</div>
            
            <div className="icon-container">
                {
                    todo.completed ? "" : 
                    <div className="icon-container__complete-icon" onClick={() => completeTodo(todo.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-38 312.38l-80.6-89.57 23.79-21.41 56 62.22L350 153.46 374.54 174z"/></svg>
                    </div>
                }
                <div className="icon-container__remove-icon" onClick={() => removeTodo(todo.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm86.63 272L320 342.63l-64-64-64 64L169.37 320l64-64-64-64L192 169.37l64 64 64-64L342.63 192l-64 64z"/></svg>
                </div>
            </div>
        </div>
    );
};

export default Task;