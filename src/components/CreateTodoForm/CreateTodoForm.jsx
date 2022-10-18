import React, {useState} from "react";
import Button from "../UI/MyButton/MyButton";
import Input from "../UI/MyInput/MyInput";
import "./CreateTodoForm.scss";


const Form = ({todos, setTodos}) => {
    const [todoTitle, setTodoTitle] = useState("");

    const createNewTodo = (e) => {
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
                onClick={createNewTodo}
            />
        </form>
    )
}

export default Form;