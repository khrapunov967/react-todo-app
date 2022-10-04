import React from "react";
import "./Task.scss";

const Task = ({task, setTasks, tasks}) => {

    const completeTask = (task) => {
        setTasks(tasks.map(item => {
            if (item.id === task.id) item.completed = true;
            return item;
        }));
    };

    const removeTask = (task) => {
        setTasks(tasks.filter(item => item.id !== task.id));
    };

    return (
        <div className={!task.completed ? "task" : "task completed"}>
            <div className="task__name">{task.name}</div>
            <div className="icon-container">
                {
                    task.completed ? "" : 
                    <div className="icon-container__complete-icon" onClick={() => completeTask(task)}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-38 312.38l-80.6-89.57 23.79-21.41 56 62.22L350 153.46 374.54 174z"/></svg>
                    </div>
                }
                <div className="icon-container__remove-icon" onClick={() => removeTask(task)}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm86.63 272L320 342.63l-64-64-64 64L169.37 320l64-64-64-64L192 169.37l64 64 64-64L342.63 192l-64 64z"/></svg>
                </div>
            </div>
        </div>
    );
};

export default Task;