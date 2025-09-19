import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer'

const AppLayout = () => {
  return (
    <>
     <Navbar />
     <main className='mt-20'>
        <Outlet />
     </main>
     <Footer />
    </>
  )
}

export default AppLayout
