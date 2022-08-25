import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
    name: 'comments',
    initialState: {
        count: 0,
        data: [],
    },
    reducers: {
        setCommentsPerApp: (state, action) => {
            state.count = action.payload.count;
            state.data = action.payload.data;
        }
    }
});

export const { setCommentsPerApp } = commentSlice.actions;
