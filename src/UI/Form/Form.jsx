import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Form.scss";


const Form = ({tasks, setTasks}) => {
    const [taskName, setTaskName] = useState("");

    const addNewTask = (e) => {
        e.preventDefault();
        
        if (taskName.trim()) {
            const newTask = {id: Date.now(), name: taskName, completed: false};
            setTasks([...tasks, newTask]);
            setTaskName("");
        }
    }

    return (
        <form className="form">
            <Input holder={"task text..."} value={taskName} onChange={e => setTaskName(e.target.value)}/>
            <Button buttonName={"Create"} onClick={addNewTask}/>
        </form>
    )
}

export default Form;