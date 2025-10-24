import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

const Mainlayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 w-10/12 mx-auto py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Mainlayout
