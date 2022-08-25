import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { SelectedApp } from '../../store/applications/appsThunks';
import { getCommentPerApp } from '../../store/comments/commentThunks';
import { openModal } from '../../store/ui/uiThunks';
import { RatingLayout } from '../layout/RatingLayout'

export const CardItem = ({ id, name, developer, score = 3, price, categoryId, description, isInstalled }) => {

    const dispatch = useDispatch();

    const selectedItem = () => {
        dispatch(openModal(true));

        const item = { id, name, developer, score, price, categoryId, description, isInstalled }

        dispatch(SelectedApp(item));
        dispatch(getCommentPerApp(id));
    }

    return (
        <>
            <div className="col-md-3 col-sm-6 mb-4" onClick={selectedItem}>
                <div className="card cardItem">
                    <img srcSet={`img/app-icons/${id}.webp`} className="card-img-top px-2 py-2" alt="card icon app" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">{name}</h5>
                        <span className="card-title">{developer}</span>

                        <RatingLayout countStarts={score} />
                        {
                            (price >= 0.5) ?
                                <span className="dt-2">${price}</span>
                                : <span className="dt-2">Free</span>

                        }
                    </div>
                </div>
            </div>


        </>
    )
}
