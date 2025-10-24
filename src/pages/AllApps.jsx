import React from 'react'
import useHooks from '../Hooks/useHooks'
import AppCard from '../components/AppCard'

const AllApps = () => {
    const { apps, loading, error } = useHooks() || {}
    return (
        <div className=' mt-20 mb-20'>
            <h1 className='text-5xl text-center font-bold'>Trending Apps</h1>
            <p className='text-gray-400 text-center text-xl mt-3'>Explore All Trending Apps on the Market developed by us</p>
            <div className='grid grid-cols-4 gap-4 mt-10'>
                {
                    apps.map(app => <AppCard app={app} />)
                }
            </div>
        </div>
    )
}

export default AllApps