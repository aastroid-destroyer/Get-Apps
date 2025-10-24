import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import useHooks from '../Hooks/useHooks'
import AppCard from '../components/AppCard'
import loadingImg from '/logo.png' 

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false)
    }, 1000);
    return () => { clearTimeout(delay) }
  }, [])

  const { apps, error } = useHooks() || {}
  const featuredApps = apps.slice(0, 8);

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
    <div>
      <Banner />
      <div className='w-10/12 mx-auto py-4'>
        <h1 className='text-5xl text-center font-bold mt-20'>Trending Apps</h1>
        <p className='text-gray-400 text-center text-xl mt-3'>Explore All Trending Apps on the Market developed by us</p>
        <div className='grid grid-cols-4 gap-6 mt-10'>
          {
            featuredApps.map(app => <AppCard key={app.id} app={app} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Home
