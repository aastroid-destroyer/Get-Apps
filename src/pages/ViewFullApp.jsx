import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import useHooks from '../Hooks/useHooks';
import { Download, MessageSquare, Star } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import toast, { Toaster } from 'react-hot-toast';
import loadingImg from '/logo.png'

const ViewFullApp = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const delay = setTimeout(() => {
            setLoading(false)
        }, 1000);
        return () => { clearTimeout(delay) }
    }, [])
    const { id } = useParams();
    const { apps, error } = useHooks() || {};

    const [isInstalled, setIsInstalled] = useState(false);
    const SingleApp = apps?.find(p => p.id === Number(id));

    useEffect(() => {
        const existingData = localStorage.getItem('installApp');
        if (existingData && SingleApp) {
            try {
                const existingList = JSON.parse(existingData);
                const found = existingList.some(p => p.id === SingleApp.id);
                setIsInstalled(found);
            } catch {
                setIsInstalled(false);
            }
        }
    }, [SingleApp]);

    if (error) return <div>Error: {error}</div>;


    if (!SingleApp) return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-6xl font-extrabold text-gray-800 mb-4">Apps Not Found Sorry</h1>
      <p className="text-xl text-gray-600 mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
    );

    const { title, ratingAvg, downloads, companyName, reviews, ratings, description, size, image } = SingleApp;

    const handleInstallBtn = () => {
        const existingData = localStorage.getItem('installApp');
        let existingList = [];

        try {
            existingList = existingData ? JSON.parse(existingData) : [];
            if (!Array.isArray(existingList)) existingList = [];
        } catch {
            existingList = [];
        }

        const isDuplicate = existingList.some(p => p.id === SingleApp.id);
        if (isDuplicate) return;

        const updatedList = [...existingList, SingleApp];
        localStorage.setItem('installApp', JSON.stringify(updatedList));
        setIsInstalled(true);

        toast.success('App Installed! ✅');
    };
    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-white">
                <p className="text-7xl font-bold flex items-center gap-2">
                    L
                    <img
                        src={loadingImg}
                        alt="loading"
                        className="w-12 h-12 animate-spin"
                    />
                    ading...
                </p>
            </div>
        )
    }

    return (
        <div className="w-10/12 mx-auto py-4">
            <Toaster position="top-right" reverseOrder={false} />

            <div className="bg-white rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 w-full">
                <div className="w-full md:w-48 h-48 flex items-center justify-center rounded-xl">
                    <img
                        src={image}
                        alt="App Icon"
                        className="w-full h-full object-contain rounded-xl bg-blue-50 p-5"
                    />
                </div>

                <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
                    <p className="text-sm text-gray-500 mb-4">
                        Developed by{" "}
                        <a href="#" className="text-indigo-600 hover:underline font-medium">
                            {companyName}
                        </a>
                    </p>

                    <div className="flex flex-wrap gap-8 mb-5">
                        <div className="flex items-center gap-2">
                            <Download className="text-green-500 w-6 h-6" />
                            <div>
                                <p className="text-xs text-gray-500">Downloads</p>
                                <p className="font-bold text-gray-800 text-lg">{downloads}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <Star className="text-orange-500 w-6 h-6" />
                            <div>
                                <p className="text-xs text-gray-500">Average Ratings</p>
                                <p className="font-bold text-gray-800 text-lg">{ratingAvg}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <MessageSquare className="text-purple-500 w-6 h-6" />
                            <div>
                                <p className="text-xs text-gray-500">Total Reviews</p>
                                <p className="font-bold text-gray-800 text-lg">{reviews}</p>
                            </div>
                        </div>
                    </div>

                    {isInstalled ? (
                        <button
                            disabled
                            className="bg-gray-400 text-white px-5 py-2 rounded-md font-medium text-sm cursor-not-allowed"
                        >
                            Installed
                        </button>
                    ) : (
                        <button
                            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md font-medium text-sm transition"
                            onClick={handleInstallBtn}
                        >
                            Install Now ({size || '291'} MB)
                        </button>
                    )}
                </div>
            </div>

            <div className="mt-6 w-full h-100 border-b py-18 border-gray-300">
                <h4 className="text-gray-700 font-bold mb-2 text-2xl">Ratings</h4>
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart
                        data={ratings}
                        layout="vertical"
                        margin={{ top: 10, right: 20, left: 40, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis type="category" dataKey="name" />
                        <Tooltip />
                        <Bar dataKey="count" fill="#FFA500" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-6">
                <h1 className="font-bold text-2xl mb-2">Description</h1>
                <p className="font-light text-xl text-gray-500">{description}</p>
            </div>
        </div>
    );
};

export default ViewFullApp;
