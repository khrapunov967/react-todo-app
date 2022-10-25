export default (state, action) => {

    const todos = state.todos;

    const getCompletedTodos = () => {
        return todos.filter(todo => todo.completed)
    };

    const getInProgressTodos = () => {
        return todos.filter(todo => !todo.completed);
    };

    switch(action.type) {
        case "completeTodo":
            return {
                ...state, 
                todos: state.todos.map(todo => todo.id === action.payload.id ? {...todo, completed: action.payload.val} : todo)
            };

        case "removeTodo":
            action.payload.event.stopPropagation();

            return {
                ...state, 
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            };

        case "showCreateTodoForm":
            action.payload.event.stopPropagation();

            return {
                ...state,
                isCreateTodoFormVisible: action.payload.value
            };

        case "onChangeTodoTitle":
            return {
                ...state, 
                todoTitle: action.payload
            }

        case "createTodo":
            action.payload.stopPropagation();

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

        case "filterTodos":
            return {
                ...state,
                todos: action.payload.way === "Completed" ? getCompletedTodos() : 
                       action.payload.way === "In Progress" ? getInProgressTodos() : state.todos,
                selectItems: state.selectItems.map(item => item.id === action.payload.id ? {...item, active: true} : {...item, active: false})
            };

        default:
            return state;
    }
};