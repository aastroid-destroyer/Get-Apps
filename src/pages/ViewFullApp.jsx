import React from 'react'
import { useParams } from 'react-router'
import useHooks from '../Hooks/useHooks';
import { Download, MessageSquare, Star } from 'lucide-react';

const ViewFullApp = () => {
    const { id } = useParams();
    const { apps, loading, error } = useHooks() || {};



    const SingleApp = apps?.find(p => p.id === Number(id));
    if (error) return <div>Error: {error}</div>;
    if (loading) return <div>Loading................</div>;
    const { title, ratingAvg, downloads,companyName,reviews } = SingleApp;

    return (
        <div className="bg-white rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 w-10/12 mx-auto">
            {/* App Icon */}
            <div className="w-24 h-24 flex items-center justify-center bg-blue-50 rounded-xl">
                <img
                    src="/alarm-icon.png"
                    alt="App Icon"
                    className="w-16 h-16 object-contain"
                />
            </div>

            {/* App Info */}
            <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">
                    {title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                    Developed by{" "}
                    <a
                        href="#"
                        className="text-indigo-600 hover:underline font-medium"
                    >
                        {companyName}
                    </a>
                </p>

                <div className="flex flex-wrap gap-8 mb-5">
                    {/* Downloads */}
                    <div className="flex items-center gap-2">
                        <Download className="text-green-500 w-5 h-5" />
                        <div>
                            <p className="text-xs text-gray-500">Downloads</p>
                            <p className="font-bold text-gray-800 text-lg">{downloads}</p>
                        </div>
                    </div>

                    {/* Average Ratings */}
                    <div className="flex items-center gap-2">
                        <Star className="text-yellow-500 w-5 h-5" />
                        <div>
                            <p className="text-xs text-gray-500">Average Ratings</p>
                            <p className="font-bold text-gray-800 text-lg">{ratingAvg}</p>
                        </div>
                    </div>

                    {/* Total Reviews */}
                    <div className="flex items-center gap-2">
                        <MessageSquare className="text-purple-500 w-5 h-5" />
                        <div>
                            <p className="text-xs text-gray-500">Total Reviews</p>
                            <p className="font-bold text-gray-800 text-lg">{reviews}</p>
                        </div>
                    </div>
                </div>

                {/* Install Button */}
                <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md font-medium text-sm transition">
                    Install Now (291 MB)
                </button>
            </div>
        </div>
    );
};

export default ViewFullApp;
