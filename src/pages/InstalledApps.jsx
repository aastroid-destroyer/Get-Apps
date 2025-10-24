import { Download, MessageSquare, Star } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import Uninstall from '../components/Uninstall';

const InstalledApps = () => {
    const [installedApps, setInstalledApps] = useState([]);

    useEffect(() => {
        const savedData = localStorage.getItem('installApp');
        if (savedData) {
            setInstalledApps(JSON.parse(savedData));
        }
    }, [])
    return (
        <div className='mt-20 mb-20'>
            <h1 className='text-5xl text-center font-bold'>Trending Apps</h1>
            <p className='text-gray-400 text-center text-xl mt-3'>
                Explore All Trending Apps on the Market developed by us
            </p>
            <div>
                {
                    installedApps.map(app => <Uninstall app={app}/>)
                }
            </div>

        </div>
    )
}

export default InstalledApps