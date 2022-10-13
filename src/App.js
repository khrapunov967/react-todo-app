import React, {useEffect, useState} from "react";
import Title from "./components/Title/Title";
import Form from "./components/UI/Form/Form";
import TasksSection from "./components/TodosSection/TodosSection"


function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="wrapper">
      <Title 
        titleName={"To-Do Application"} 
      />

      <Form 
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
