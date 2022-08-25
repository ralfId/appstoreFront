import { setIsModalOpen } from "./uiSlice";


export const openModal = () => {
    return async (dispatch) => {
        dispatch(setIsModalOpen(true));
    };
};

export const closeModal = () => {
    return async (dispatch) => {
        dispatch(setIsModalOpen(false));
    };
};
