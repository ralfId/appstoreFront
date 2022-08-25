import { deleteAppApi, getAllAppsApi, getAllAppsByCategoryApi } from "../../api/apiRequests";
import { setApplications, setDeleteApp, setSelectedApp} from "./appsSlice";

export const getAllApps = () => {
    return async (dispatch) => {
        const payload = await getAllAppsApi();
        dispatch(setApplications(payload));
    };
};


export const SelectedApp = (_selectedApp) => {
    return async (dispatch) => {
        dispatch(setSelectedApp(_selectedApp));
    };
};

export const getAllAppsByCategory = (idCategory) => {
    return async (dispatch) => {
        const payload = await getAllAppsByCategoryApi(idCategory);
        dispatch(setApplications(payload));
    };
};

export const deleteApp = (idApp) => {
    return async (dispatch) => {
        const payload = await deleteAppApi(idApp);
        dispatch(setDeleteApp(payload));
    };
};