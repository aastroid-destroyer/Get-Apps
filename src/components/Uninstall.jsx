import { Download, Star } from 'lucide-react';
import React from 'react';

const Uninstall = ({ app, onUninstall }) => {
    const { title, ratingAvg, downloads, size, id,image } = app;

    return (
        <div className="bg-white rounded-xl p-4 flex items-center justify-between w-10/12 mx-auto ">
            {/* App Info */}
            <div className="flex items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-xl">
                    <img src={image} alt="App Icon" className="w-12 h-12 object-contain" />
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                    <div className="flex items-center gap-4 mt-1">
                        <div className="flex items-center gap-1">
                            <Download className="text-green-500 w-4 h-4" />
                            <p className="text-xs font-semibold">{downloads}</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <Star className="text-yellow-500 w-4 h-4" />
                            <p className="text-xs font-semibold">{ratingAvg}</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <p className="text-xs font-semibold">{size} MB</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Uninstall Button */}
            <button
                onClick={() => onUninstall(id)}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium text-sm transition"
            >
                Uninstall
            </button>
        </div>
    );
}

export default Uninstall;
