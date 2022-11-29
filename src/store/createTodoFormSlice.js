import { createSlice } from "@reduxjs/toolkit";

const createTodoFormSlice = createSlice({
    name: "createTodoForm",
    initialState: {
        isFormVisible: false
    },
    reducers: {
        showForm(state) {
            state.isFormVisible = true;
        },
        hideForm(state) {
            state.isFormVisible = false;
        }
    }
});

export const { showForm, hideForm } = createTodoFormSlice.actions;
export default createTodoFormSlice.reducer;