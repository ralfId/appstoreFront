import Rating from 'react-rating';
import { useDispatch, useSelector } from 'react-redux';
import { RateApp } from '../../store/applications/appsThunks';

export const RatingLayout = ({ countStarts = 0, isReadOnly = true }) => {

    let starColor = (isReadOnly) ? '#F4BB44' : (!isReadOnly && countStarts >= 3) ? '#32CD32' : 'red';
    const dispatch = useDispatch();
    const { selectedApp } = useSelector(state => state.applications);



    const onClickRating = (value) => {
        dispatch(RateApp(selectedApp.id, value));
    }

    return (
        <>
            <Rating
                readonly={isReadOnly}
                start={0}
                stop={5}
                step={1}
                emptySymbol={<li className="far fa-star" style={{ color: starColor }}></li>}
                fullSymbol={<li className="fas fa-star" style={{ color: starColor }}></li>}
                initialRating={countStarts}
                placeholderRating={countStarts}
                onClick={onClickRating}
            />
        </>
    )
}
