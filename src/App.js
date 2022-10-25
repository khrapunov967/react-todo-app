import React, { useReducer } from "react";
import CreateTodoButton from "./components/CreateTodoButton/CreateTodoButton";
import CreateTodoForm from "./components/CreateTodoForm/CreateTodoForm";
import Header from "./components/Header/Header";
import TodosContainer from "./components/TodosContainer/TodosContainer";
import { Context } from "./context";
import reducer from "./reducer";

function App() {

  const [state, dispatch] = useReducer(reducer, {
    todos: [
      {id: 1, title: "Build a modern Todo App", completed: false},
      {id: 2, title: "Build a modern Todo App", completed: false},
      {id: 3, title: "Build a modern Todo App", completed: false},
    ],
    isSideMenuVisible: false,
    isCreateTodoFormVisible: false,
    todoTitle: ""
  });
  
  return (
    <Context.Provider value={{state, dispatch}}>
      <div className="wrapper">
        <CreateTodoForm />
        <div className="app">
          <Header />
          <TodosContainer />
          <CreateTodoButton onClick={() => dispatch({type: "showCreateTodoForm", payload: true})}/>
        </div>
      </div>
    </Context.Provider>  
  );
}

export default App;
