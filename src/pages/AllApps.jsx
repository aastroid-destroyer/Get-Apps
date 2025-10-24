import React, { useState } from 'react'
import useHooks from '../Hooks/useHooks'
import AppCard from '../components/AppCard'

const AllApps = () => {
    const [search, setSearch] = useState('')
    const { apps = [], loading, error } = useHooks() || {}

    // ✅ same search logic as used in Products.jsx
    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term
        ? apps.filter((p) => p.title.toLocaleLowerCase().includes(term))
        : apps

    return (
        <div className='mt-20 mb-20'>
            <h1 className='text-5xl text-center font-bold'>Trending Apps</h1>
            <p className='text-gray-400 text-center text-xl mt-3'>
                Explore All Trending Apps on the Market developed by us
            </p>

            <div className='flex justify-between py-5 items-center'>
                {/* ✅ changed to show count of searched results */}
                <h1 className='font-bold text-xl'>
                    ({searchedApps.length}) Apps Found
                </h1>

                <label className='input'>
                    {/* ✅ uses the same controlled search input */}
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type='search'
                        placeholder='Search Apps'
                    />
                </label>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10'>
                {searchedApps.map((app) => (
                    <AppCard key={app.id} app={app} />
                ))}
            </div>
        </div>
    )
}

export default AllApps
