import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

const Mainlayout = () => {
  return (
    <>
      <Navbar />
      <div className='w-10/12 mx-auto'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Mainlayout