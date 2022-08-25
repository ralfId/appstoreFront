import { getCategoriesApi } from "../../api/apiRequests";
import { setCategories } from "./categorySlice";

export const getCategories = () => {
    return async (dispatch) => {
        const payload = await getCategoriesApi();
        dispatch(setCategories(payload));
    };
};