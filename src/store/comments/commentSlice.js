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
        },
        setNewCommentToApp: (state, action) => {
            state.count += 1;
            state.data = [action.payload.data, ...state.data];

        },
    }
});

export const { setCommentsPerApp,setNewCommentToApp } = commentSlice.actions;
