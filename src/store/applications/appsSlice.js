import { createSlice } from "@reduxjs/toolkit";

export const appsSlice = createSlice({
    name: 'application',
    initialState: {
        count: 0,
        data: [],
        selectedApp: null,
    },
    reducers: {
        setApplications: (state, action) => {
            state.count = action.payload.count;
            state.data = action.payload.data;
        },
        setSelectedApp: (state, action) => {
             state.selectedApp = action.payload
        }
    }
});

export const { setApplications, setSelectedApp } = appsSlice.actions;
