import { Download, Star } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Uninstall from '../components/Uninstall';

const InstalledApps = () => {
    const [sortOrder, setSortOrder] = useState('none');
    const [installedApps, setInstalledApps] = useState([]);

    // Load installed apps from localStorage
    useEffect(() => {
        const savedData = localStorage.getItem('installApp');
        if (savedData) setInstalledApps(JSON.parse(savedData));
    }, []);

    // Handle uninstall action
    const handleUninstall = (id) => {
        const updatedList = installedApps.filter(app => app.id !== id);
        setInstalledApps(updatedList);
        localStorage.setItem('installApp', JSON.stringify(updatedList));
    }

    // Sort apps
    const sortedApps = (() => {
        if (sortOrder === "price-asc") return [...installedApps].sort((a, b) => a.size - b.size);
        if (sortOrder === "price-desc") return [...installedApps].sort((a, b) => b.size - a.size);
        return installedApps;
    })();

    return (
        <div className='mt-20 mb-20  w-10/12 mx-auto py-4'>
            <h1 className='text-5xl text-center font-bold'>Installed Apps</h1>
            <p className='text-gray-400 text-center text-xl mt-3'>
                Manage your installed apps
            </p>

            <div className='flex justify-between py-5 items-center'>
                <h1 className='font-bold text-xl'>{sortedApps.length} Apps Found</h1>
                <label className='form-control w-full max-w-xs'>
                    <select
                        className='select select-bordered'
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
