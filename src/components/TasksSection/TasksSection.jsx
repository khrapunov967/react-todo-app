import React from "react";
import Task from "../Task/Task";

import "./TasksSection.scss";

const TasksSection = ({tasks}) => {
    return (
        <section className="tasks-section">
            {tasks.map(task => <Task task={task} key={task.id}/>)}
        </section> 
    );
}

export default TasksSection;