import { deleteAppApi, getAllAppsApi, getAllAppsByCategoryApi, InstalledAppApi, RateAppApi } from "../../api/apiRequests";
import { setApplications, setDeleteApp, setSelectedApp, setInstalledApp, setRatedApp} from "./appsSlice";

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

export const IntallApp = (appId) => {
    return async (dispatch) => {
        const payload = await InstalledAppApi(appId);
        dispatch(setInstalledApp(payload));
    };
};

export const RateApp = (appId, score) => {
    return async (dispatch) => {
        const payload = await RateAppApi(appId, score);
        dispatch(setRatedApp(payload));
    };
};