import React, { useMemo }  from "react";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import "./TodosContainer.scss";

const TodosContainer = () => {

    const todos = useSelector(state => state.todoSlice.todos);
    const selectItems = useSelector(state => state.selectSlice.selectItems);

    const filteredTodos = useMemo(() => {

    const getFilteredTodos = (way) => {
      switch(way) {
        case "COMPLETED":
          return todos.filter(todo => todo.completed);

        case "IN PROGRESS":
          return todos.filter(todo => !todo.completed);

        default:
          return todos;
      }
    }

    for (let i = 0; i < selectItems.length; i++) {
      if (selectItems[i].active) {
        return getFilteredTodos(selectItems[i].value);
      }
    }

  }, [todos, selectItems]);

    return (
        <section className="todos-container">
            {
                filteredTodos.map(todo => <TodoItem todo={todo} key={todo.id}/>)
            }
        </section>
    );
};

export default TodosContainer;