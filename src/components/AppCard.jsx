import React from 'react'

const AppCard = ({app}) => {
    const {title,ratingAvg,downloads} = app
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title"> {title}
                </h2>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline">{downloads}</div>
                    <div className="badge badge-outline">{ratingAvg}</div>
                </div>
            </div>
        </div>
    )
}

export default AppCard