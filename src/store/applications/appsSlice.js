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
        },
        setDeleteApp: (state, action) => {
            state.count -= 1;
            state.data = state.data.filter(app => app.id !== action.payload.data.id);
            state.selectedApp = null;
        },
        setInstalledApp: (state, action) => {
            state.data = state.data.map(app => {
                if (app.id === action.payload.data.id) {

                    return action.payload.data
                }
                return app;
            });
            state.selectedApp = null;
        },
    }
});

export const { setApplications, setSelectedApp, setDeleteApp, setInstalledApp } = appsSlice.actions;
