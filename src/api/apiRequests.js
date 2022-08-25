import { appStoreApi } from './appStoreApi';

export const getCategoriesApi = async () => {

    try {
        const categories = await appStoreApi.get('category');

        if (categories.status === 200) {
            return categories.data;
        } else {
            return {
                count: 0,
                data: []
            }
        }

    } catch (error) {
        return {
            count: 0,
            data: []
        }
    }

}

export const getAllAppsApi = async () => {

    try {
        const apps = await appStoreApi.get('apps');

        if (apps.status === 200) {
            return apps.data;
        } else {
            return {
                count: 0,
                data: []
            }
        }
    } catch (error) {
        return {
            count: 0,
            data: []
        }
    }

}

export const getCommentsPerAppApi = async (id) => {

    try {
        const comments = await appStoreApi.get(`appComments/${id}`);

        if (comments.status === 200) {
            return comments.data;
        } else {
            return {
                count: 0,
                data: []
            }
        }
    } catch (error) {
        return {
            count: 0,
            data: []
        }
    }

}
