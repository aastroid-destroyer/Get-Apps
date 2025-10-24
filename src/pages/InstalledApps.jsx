import { Download, Star } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Uninstall from '../components/Uninstall';
import loadingImg from '/logo.png';

const InstalledApps = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const delay = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(delay);
    }, []);

    const [sortOrder, setSortOrder] = useState('none');
    const [installedApps, setInstalledApps] = useState([]);

    useEffect(() => {
        const savedData = localStorage.getItem('installApp');
        if (savedData) setInstalledApps(JSON.parse(savedData));
    }, []);

    const handleUninstall = (id) => {
        const updatedList = installedApps.filter(app => app.id !== id);
        setInstalledApps(updatedList);
        localStorage.setItem('installApp', JSON.stringify(updatedList));
    }

    const sortedApps = (() => {
        if (sortOrder === "price-asc") return [...installedApps].sort((a, b) => a.size - b.size);
        if (sortOrder === "price-desc") return [...installedApps].sort((a, b) => b.size - a.size);
        return installedApps;
    })();

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-white">
                <p className="text-5xl md:text-7xl font-bold flex items-center gap-2">
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
        <div className='mt-20 mb-20 w-full md:w-10/12 mx-auto py-4 px-4'>
            <h1 className='text-3xl md:text-5xl text-center font-bold'>Installed Apps</h1>
            <p className='text-gray-400 text-center text-lg md:text-xl mt-3'>
                Manage your installed apps
            </p>

            <div className='flex flex-col md:flex-row justify-between py-5 items-center gap-4 md:gap-0'>
                <h1 className='font-bold text-lg md:text-xl'>{sortedApps.length} Apps Found</h1>
                <label className='form-control w-full max-w-xs'>
                    <select
                        className='select select-bordered w-full'
                        value={sortOrder}
                        onChange={e => setSortOrder(e.target.value)}
                    >
                        <option value='none'>Sort by size</option>
                        <option value='price-asc'>Low → High</option>
                        <option value='price-desc'>High → Low</option>
                    </select>
                </label>
            </div>

            <div className='flex flex-col gap-4'>
                {sortedApps.map(app => (
                    <Uninstall key={app.id} app={app} onUninstall={handleUninstall} />
                ))}
            </div>
        </div>
    );
}

export default InstalledApps;
