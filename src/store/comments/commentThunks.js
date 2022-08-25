
import { createNewCommentToAppApi, getCommentsPerAppApi} from '../../api/apiRequests'
import { setCommentsPerApp, setNewCommentToApp } from './commentSlice';

export const getCommentPerApp = (id) => {
    return async (dispatch) => {
        const payload = await getCommentsPerAppApi(id);
        dispatch(setCommentsPerApp(payload));
    };
};

export const createNewCommentToApp = (comment) => {
    return async (dispatch) => {
        const payload = await createNewCommentToAppApi(comment);
        dispatch(setNewCommentToApp(payload));
    };
};