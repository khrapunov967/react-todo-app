import React, {useEffect, useState} from "react";
import Title from "./components/Title/Title";
import Form from "./UI/Form/Form";
import TasksSection from "./components/TasksSection/TasksSection"


function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="wrapper">
      <Title 
        titleName={"To-Do Application"} 
      />

      <Form 
        tasks={tasks} 
        setTasks={setTasks}
      />

      <TasksSection 
        tasks={tasks} 
        setTasks={setTasks}
      />
    </div>
  );
}

export default App;
