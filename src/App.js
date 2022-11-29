import React from "react";
import { useDispatch } from "react-redux";
import CreateTodoButton from "./components/CreateTodoButton/CreateTodoButton";
import CreateTodoForm from "./components/CreateTodoForm/CreateTodoForm";
import Header from "./components/Header/Header";
import TodosContainer from "./components/TodosContainer/TodosContainer";
import { showForm } from "./store/createTodoFormSlice";

function App() {

  const dispatch = useDispatch();

  // const initialState = {
  //   todos: JSON.parse(localStorage.getItem("todos")) || [],
  //   selectItems: [
  //     {id: 1, value: "Completed", active: false},
  //     {id: 2, value: "In Progress", active: false},
  //     {id: 3, value: "All", active: true},
  //   ],
  //   isSideMenuVisible: false,
  //   isCreateTodoFormVisible: false,
  //   todoTitle: ""
  // };

  // const filteredTodos = useMemo(() => {

  //   const getFilteredTodos = (way) => {
  //     switch(way) {
  //       case "Completed":
  //         return state.todos.filter(todo => todo.completed);

  //       case "In Progress":
  //         return state.todos.filter(todo => !todo.completed);

  //       default:
  //         return state.todos;
  //     }
  //   }

  //   for (let i = 0; i < state.selectItems.length; i++) {
  //     if (state.selectItems[i].active) {
  //       return getFilteredTodos(state.selectItems[i].value);
  //     }
  //   }

  // }, [state.selectItems, state.todos]);
  
  return (
    <div className="wrapper">
      <CreateTodoForm />

      <div className="app">
        <Header />

        <TodosContainer /> 

        <CreateTodoButton 
          onClick={(e) => dispatch(showForm())}
        />
      </div>
    </div>
  );
}

export default App;
