import React from 'react'

export const RatingLayout = ({ countStarts = 0 , size = 1}) => {
    return (
        <>
            <div >
                <i className={`fas fa-star ${size === 1 ? "iconSize1" : "iconSize2" } ` } ></i>
                <i className={`fas fa-star ${size === 1 ? "iconSize1" : "iconSize2" } ` } ></i>
                <i className={`fas fa-star ${size === 1 ? "iconSize1" : "iconSize2" } ` } ></i>
                <i className={`fas fa-star ${size === 1 ? "iconSize1" : "iconSize2" } ` } ></i>
                <i className={`fas fa-star ${size === 1 ? "iconSize1" : "iconSize2" } ` } ></i>

            </div>
        </>
    )
}
