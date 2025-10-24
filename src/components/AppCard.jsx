import React from 'react'
import { Link } from 'react-router'

const AppCard = ({ app }) => {
    const { image,title, ratingAvg, downloads,id } = app
    return (
        <Link to={`/appDetails/${id}`}>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img className='rounded-xl'
                        src={image}
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