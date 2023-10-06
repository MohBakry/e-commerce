import React, { useContext, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import style from './Layout.module.css'
import { Outlet } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import toast, { Toaster } from 'react-hot-toast';
export default function Layout() {
  let { SetUserToken } = useContext(UserContext)
  useEffect(() => {
    if (localStorage.getItem('token') != null) {
      SetUserToken(localStorage.getItem('token'))
    }
  })
  return (
    <>
      <div className='h-100 position-relative'>
        <Navbar />
        <div className="container layoutContainer">
          <Toaster />
          <Outlet />
        </div>


        <Footer />
      </div>
    </>
  )
}

