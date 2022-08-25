import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isModalOpen: false,
    },
    reducers: {
        setIsModalOpen: (state, action) => {
            state.isModalOpen = action.payload;
        }
    }
});

export const { setIsModalOpen } = uiSlice.actions;
