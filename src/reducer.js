export default (state, action) => {

    switch(action.type) {
        case "completeTodo":
            return {
                ...state, 
                todos: state.todos.map(todo => todo.id === action.payload.id ? {...todo, completed: action.payload.val} : todo)
            };

        case "removeTodo":
            return {
                ...state, 
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };

        case "showCreateTodoForm":
            return {
                ...state,
                isCreateTodoFormVisible: true
            };

        case "onChangeTodoTitle":
            console.log(action.payload)
            return {
                ...state, 
                todoTitle: action.payload
            }

        case "createTodo":
            if (state.todoTitle.trim()) {
                const newTodo = {
                    id: Date.now(),
                    title: state.todoTitle,
                    completed: false
                };
    
                return {
                    ...state,
                    todos: [...state.todos, newTodo],
                    todoTitle: "",
                    isCreateTodoFormVisible: false
                };

            } else {
                return state;
            }

        case "menuHover":
            return {
                ...state, 
                isSideMenuVisible: action.payload
            };

        default:
            return state;
    }
};