import React from "react";
import Task from "../Task/Task";

import "./TasksSection.scss";

const TasksSection = ({tasks, setTasks}) => {
    return (
        <section className="tasks-section">
            {
                !tasks.length ? <p className="no-tasks">No Tasks!</p> :
                tasks.map(task => <Task task={task} tasks={tasks} key={task.id} setTasks={setTasks} />)
            }
        </section> 
    );
}

export default TasksSection;