import React, { useEffect, useMemo, useReducer } from "react";
import CreateTodoButton from "./components/CreateTodoButton/CreateTodoButton";
import CreateTodoForm from "./components/CreateTodoForm/CreateTodoForm";
import Header from "./components/Header/Header";
import TodosContainer from "./components/TodosContainer/TodosContainer";
import { Context } from "./context";
import reducer from "./reducer";

function App() {

  const initialState = {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
    selectItems: [
      {id: 1, value: "Completed", active: false},
      {id: 2, value: "In Progress", active: false},
      {id: 3, value: "All", active: true},
    ],
    isSideMenuVisible: false,
    isCreateTodoFormVisible: false,
    todoTitle: ""
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const filteredTodos = useMemo(() => {

    const getFilteredTodos = (way) => {
      switch(way) {
        case "Completed":
          console.log("GET COMPLETED TODOS");
          return state.todos.filter(todo => todo.completed);

        case "In Progress":
          return state.todos.filter(todo => !todo.completed);
        default:
          return state.todos;
      }
    }


    for (let i = 0; i < state.selectItems.length; i++) {
      if (state.selectItems[i].active) {
        return getFilteredTodos(state.selectItems[i].value);
      }
    }

  }, [state.selectItems, state.todos]);


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos))
  }, [state.todos]);
  
  return (
    <Context.Provider value={{state, dispatch, filteredTodos}}>
      <div className="wrapper">
        <CreateTodoForm />
        <div className="app">
          <Header />
          <TodosContainer />
          <CreateTodoButton onClick={(e) => dispatch({type: "showCreateTodoForm", payload: {value: true, event: e}})}/>
        </div>
      </div>
    </Context.Provider>  
  );
}

export default App;
