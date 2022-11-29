import React from "react";
import { useDispatch } from "react-redux";
import { showForm } from "./store/createTodoFormSlice";
import CreateTodoButton from "./components/CreateTodoButton/CreateTodoButton";
import CreateTodoForm from "./components/CreateTodoForm/CreateTodoForm";
import Header from "./components/Header/Header";
import TodosContainer from "./components/TodosContainer/TodosContainer";

function App() {

  const dispatch = useDispatch();
  
  return (
    <div className="wrapper">
      <CreateTodoForm />

      <div className="app">
        <Header />

        <TodosContainer /> 

        <CreateTodoButton 
          onClick={() => dispatch(showForm())}
        />
      </div>
    </div>
  );
}

export default App;
