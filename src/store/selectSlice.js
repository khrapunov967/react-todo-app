import { createSlice } from "@reduxjs/toolkit";

const selectSlice = createSlice({
    name: "select",
    initialState: {
        isSelectVisible: false,
        selectItems: [
            {id: 1, value: "COMPLETED", title: "Completed", active: false},
            {id: 2, value: "IN PROGRESS", title: "In Progress", active: false},
            {id: 3, value: "ALL", title: "All", active: true},
        ],
    },
    reducers: {
        showSelect(state) {
            state.isSelectVisible = true;
        },
        
        hideSelect(state) {
            state.isSelectVisible = false;
        },

        changeSelectItem(state, action) {
            state.selectItems = state.selectItems.map(item => {
                if (item.value === action.payload.value) {
                    return {
                        ...item,
                        active: true
                    }
                } else {
                    return {
                        ...item,
                        active: false
                    }
                }
            });
        }
    }
});

export const { showSelect, hideSelect, changeSelectItem } = selectSlice.actions;
export default selectSlice.reducer;