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

export const getAllAppsByCategoryApi = async (categoryId) => {

    try {
        const apps = await appStoreApi.get(`apps/byCategory/${categoryId}`);

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

export const deleteAppApi = async (appId) => {

    
    try {
        const apps = await appStoreApi.delete(`apps/${appId}`);

        if (apps.status === 200) {
            return apps.data;
        } else {
            return {
                data: null
            }
        }
    } catch (error) {
        return {
            data: null
        }
    }

}

export const createNewCommentToAppApi = async (comment) => {

    
    try {
        const commentApp = await appStoreApi.post(`appComments`, JSON.stringify(comment));

        if (commentApp.status === 200) {
            return commentApp.data;
        } else {
            return {
                data: null
            }
        }
    } catch (error) {
        return {
            data: null
        }
    }

}



export const InstalledAppApi = async (appId) => {

    
    try {
        console.log(appId)
        const app = await appStoreApi.post(`apps/installApp/${appId}`);

        if (app.status === 200) {
            return app.data;
        } else {
            return {
                data: null
            }
        }
    } catch (error) {
        return {
            data: null
        }
    }

}