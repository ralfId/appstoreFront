
import { getCommentsPerAppApi} from '../../api/apiRequests'
import { setCommentsPerApp } from './commentSlice';

export const getCommentPerApp = (id) => {
    return async (dispatch) => {
        const payload = await getCommentsPerAppApi(id);
        dispatch(setCommentsPerApp(payload));
    };
};