import React from 'react'
import { Link } from 'react-router'

const AppCard = ({ app }) => {
    const { title, ratingAvg, downloads,id } = app
    return (
        <Link to={`/appDetails/${id}`}>
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

        </Link>
    )
}

export default AppCard