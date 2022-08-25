import { getAllAppsApi } from "../../api/apiRequests";
import { setApplications, setSelectedApp} from "./appsSlice";

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