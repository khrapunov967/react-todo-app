import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import createTodoFormSlice from "./createTodoFormSlice";
import selectSlice from "./selectSlice";

export default configureStore({
    reducer: {
        todoSlice,
        createTodoFormSlice,
        selectSlice
    }
});
