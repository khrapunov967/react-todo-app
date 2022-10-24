import React from "react";
import CreateTodoButton from "./components/CreateTodoButton/CreateTodoButton";
import Header from "./components/Header/Header";
import TodosContainer from "./components/TodosContainer/TodosContainer";



function App() {
  
  return (
    <div className="wrapper">
      <div className="app">
        <Header />

        <TodosContainer />

        <CreateTodoButton />
      </div>
    </div>  
  );
}

export default App;
