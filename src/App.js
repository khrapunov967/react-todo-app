import React, {useState} from "react";
import Title from "./components/Title/Title";
import Form from "./UI/Form/Form";
import TasksSection from "./components/TasksSection/TasksSection"


function App() {
  const [tasks, setTasks] = useState([
    {id: 1, name: "Feed a dog", completed: false},
    {id: 2, name: "Read 10 pages of book", completed: true},
    {id: 3, name: "Clean house", completed: false},
  ]);

  return (
    <div className="wrapper">
      <Title titleName={"To-Do Application"}/>
      <Form tasks={tasks} setTasks={setTasks}/>
      <TasksSection tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
