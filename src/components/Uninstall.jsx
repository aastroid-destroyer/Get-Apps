import { Download, MessageSquare, Star } from 'lucide-react'
import React from 'react'

const Uninstall = ({app}) => {
    console.log(app)
    const { title, ratingAvg, downloads, companyName, reviews,size } = app;
    return (
        <div className="bg-white rounded-xl p-4 flex items-center justify-between w-10/12 mx-auto h-28">
            {/* App Info */}
            <div className="flex items-center gap-4">
                {/* App Icon */}
                <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-xl">
                    <img
                        src="/alarm-icon.png"
                        alt="App Icon"
                        className="w-12 h-12 object-contain"
                    />
                </div>

                {/* Text Info */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                    

                    <div className="flex items-center gap-4 mt-1">
                        {/* Downloads */}
                        <div className="flex items-center gap-1">
                            <Download className="text-green-500 w-4 h-4" />
                            <p className="text-xs font-semibold">{downloads}</p>
                        </div>

                        {/* Average Ratings */}
                        <div className="flex items-center gap-1">
                            <Star className="text-yellow-500 w-4 h-4" />
                            <p className="text-xs font-semibold">{ratingAvg}</p>
                        </div>

                        {/* Total Reviews */}
                        <div className="flex items-center gap-1">
                            <p className="text-xs font-semibold">{size} MB</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Uninstall Button */}
            <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium text-sm transition"
            >
                Uninstall
            </button>
        </div>
    )
}

export default Uninstall