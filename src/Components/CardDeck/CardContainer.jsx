import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllApps } from '../../store/applications/appsThunks';
import { CardItem } from './CardItem'
import { CardModal } from './CardModal';

export const CardContainer = ({ categoryId = 0 }) => {

    const dispatch = useDispatch();
    const { data: AppsList } = useSelector(state => state.applications);

    useEffect(() => {
        if (categoryId === 0) {
            dispatch(getAllApps())
        } else {
            //TODO: obtener  las aplicaciones por id categoria

        }
    }, [categoryId]);


    return (
        <>
            <div className="row d-flex">
                {
                    (AppsList !== undefined) && AppsList.map(app => (<CardItem key={app.id} {...app} />))
                }

            </div>
                <CardModal/>
        </>
    )
}
