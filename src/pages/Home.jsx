import React from 'react'
import Banner from '../components/Banner'
import useHooks from '../Hooks/useHooks'
import AppCard from '../components/AppCard'

const Home = () => {
  const { apps, loading, error } = useHooks() || {}
  const featuredApps = apps.slice(0, 8);


  return (
    <div>
      <Banner />
      <div className=' w-10/12 mx-auto py-4'>
        <h1 className='text-5xl text-center font-bold mt-20'>Trending Apps</h1>
        <p className='text-gray-400 text-center text-xl mt-3'>Explore All Trending Apps on the Market developed by us</p>
        <div className='grid grid-cols-4 gap-6 mt-10'>
          {
            featuredApps.map(app => <AppCard app={app} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Home