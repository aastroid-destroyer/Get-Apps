import { Download, MessageSquare, Star } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import Uninstall from '../components/Uninstall';

const InstalledApps = () => {
    const [sortOrder, setSortOrder] = useState('none')
    const [installedApps, setInstalledApps] = useState([]);

    useEffect(() => {
        const savedData = localStorage.getItem('installApp');
        if (savedData) {
            setInstalledApps(JSON.parse(savedData));
        }
    }, [])

    const sortedItem = (() => {
        if (sortOrder === "price-asc") {
            return [...installedApps].sort((a, b) => a.size - b.size)
        }
        else if (sortOrder === "price-desc") {
            return [...installedApps].sort((a, b) => b.size - a.size)
        }
        else {
            return installedApps;
        }
    })()
    return (
        <div className='mt-20 mb-20'>
            <h1 className='text-5xl text-center font-bold'>Trending Apps</h1>
            <p className='text-gray-400 text-center text-xl mt-3'>
                Explore All Trending Apps on the Market developed by us
            </p>
            <div className='flex justify-between py-5 items-center'>
                <h1 className='font-bold text-xl'>
                    {sortedItem.length} Apps Found
                </h1>
                <label className='form-control w-full max-w-xs'>
                    <select
                        className='select select-bordered'
                        value={sortOrder}
                        onChange={e => setSortOrder(e.target.value)}
                    >
                        <option value='none'>Sort by price</option>
                        <option value='price-asc'>Low-&gt;High</option>
                        <option value='price-desc'>High-&gt;Low</option>
                    </select>
                </label>
            </div>
            <div>
                {
                    sortedItem.map(app => <Uninstall app={app} />)
                }
            </div>

        </div>
    )
}

export default InstalledApps