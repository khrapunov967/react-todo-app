import React, {useState} from "react";
import Button from "../MyButton/MyButton";
import Input from "../MyInput/MyInput";
import "./Form.scss";


const Form = ({todos, setTodos}) => {
    const [todoTitle, setTodoTitle] = useState("");

    const addNewTodo = (e) => {
        e.preventDefault();
        
        if (todoTitle.trim()) {
            const newTodo = {id: Date.now(), title: todoTitle, completed: false};
            setTodos([...todos, newTodo]);
            setTodoTitle("");
        }
    }

    return (
        <form className="form">
            <Input 
                holder={"Todo Title..."} 
                value={todoTitle} 
                onChange={e => setTodoTitle(e.target.value)}
            />

            <Button 
                buttonName={"Create"} 
                onClick={addNewTodo}
            />
        </form>
    )
}

export default Form;