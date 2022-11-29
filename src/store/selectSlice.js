import { createSlice } from "@reduxjs/toolkit";

const selectSlice = createSlice({
    name: "select",
    initialState: {
        isSelectVisible: false,
        selectItems: [
            {id: 1, value: "Completed", active: false},
            {id: 2, value: "In Progress", active: false},
            {id: 3, value: "All", active: true},
        ],
    },
    reducers: {
        showSelect(state) {
            state.isSelectVisible = true;
        },
        
        hideSelect(state) {
            state.isSelectVisible = false;
        }
    }
});

export const { showSelect, hideSelect } = selectSlice.actions;
export default selectSlice.reducer;