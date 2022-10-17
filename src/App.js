import React, { useEffect, useState } from "react";
import HeadTitle from "./components/HeadTitle/HeadTitle";
import CreateTodoForm from "./components/CreateTodoForm/CreateTodoForm";
import TasksSection from "./components/TodosSection/TodosSection"


function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <div className="wrapper">
      <HeadTitle 
        titleName={"To-Do App"} 
      />

      <CreateTodoForm 
        todos={todos} 
        setTodos={setTodos}
      />

      <TasksSection 
        todos={todos} 
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
