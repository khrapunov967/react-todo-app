import React, {useState} from "react";
import Title from "./components/Title/Title";
import Form from "./UI/Form/Form";
import TasksSection from "./components/TasksSection/TasksSection"


function App() {
  const [tasks, setTasks] = useState([
    {id: 1, name: "learn react.js", completed: false},
    {id: 2, name: "read 10 pages of a book", completed: false},
    {id: 3, name: "feed a dog", completed: false},
    {id: 4, name: "clean house", completed: true},
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
