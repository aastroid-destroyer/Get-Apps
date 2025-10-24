import React from 'react';
import { Link } from 'react-router';
import { Download, Star } from 'lucide-react'; // Import icons

const AppCard = ({ app }) => {
    const { image, title, ratingAvg, downloads, id } = app;

    return (
        <Link to={`/appDetails/${id}`}>
            <div className="card bg-base-100 shadow-sm hover:scale-105 transition ease-in-out">
                <figure>
                    <img className='rounded-xl' src={image} alt={title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline flex items-center gap-1 text-green-500 border-green-500">
                            <Download size={16} />
                            {downloads}
                        </div>
                        <div className="badge badge-outline flex items-center gap-1 text-orange-500 border-orange-500">
                            <Star size={16} />
                            {ratingAvg}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default AppCard;
