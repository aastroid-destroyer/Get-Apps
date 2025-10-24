import React, { useEffect, useState } from 'react'
import useHooks from '../Hooks/useHooks'
import AppCard from '../components/AppCard'
import loadingImg from '/logo.png' 

const AllApps = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const delay = setTimeout(() => {
            setLoading(false)
        }, 1000);
        return () => { clearTimeout(delay) }
    }, [])

    const [search, setSearch] = useState('')
    const { apps = [], error } = useHooks() || {}

    // ✅ same search logic as used in Products.jsx
    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term
        ? apps.filter((p) => p.title.toLocaleLowerCase().includes(term))
        : apps

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
        <div className='mt-20 mb-20 w-10/12 mx-auto py-4'>
            <h1 className='text-5xl text-center font-bold'>Trending Apps</h1>
            <p className='text-gray-400 text-center text-xl mt-3'>
                Explore All Trending Apps on the Market developed by us
            </p>

            <div className='flex justify-between py-5 items-center'>
                <h1 className='font-bold text-xl'>
                    ({searchedApps.length}) Apps Found
                </h1>

                <label className='input'>
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type='search'
                        placeholder='Search Apps'
                    />
                </label>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10'>
                {searchedApps.length > 0 ? (
                    searchedApps.map((app) => <AppCard key={app.id} app={app} />)
                ) : (
                    <p className='text-center col-span-full text-gray-500 text-4xl mt-10'>
                        No Apps Found
                    </p>
                )}
            </div>
        </div>
    )
}

export default AllApps
