import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        count: 0,
        data: []
    },
    reducers: {
        setCategories: (state, action) => {
            //console.log(action. payload)
            state.count = action.payload.count;
            state.data = action.payload.data;
        }
    }
});

export const { setCategories } = categorySlice.actions;
