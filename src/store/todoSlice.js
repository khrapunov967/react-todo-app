import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: JSON.parse(localStorage.getItem("todos")) || [],
    },
    reducers: {
        addTodo(state, action) {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            };

            state.todos.push(newTodo);

            localStorage.setItem("todos", JSON.stringify(state.todos));
        },

        toggleTodo(state, action) {
            const { id } = action.payload;

            state.todos = state.todos.map(todo => (todo.id === id) ? {...todo, completed: !todo.completed} : todo);
        },
        
        removeTodo(state, action) {
            const { id } = action.payload;

            state.todos = state.todos.filter(todo => todo.id !== id);

            localStorage.setItem("todos", JSON.stringify(state.todos));
        }
    }
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;