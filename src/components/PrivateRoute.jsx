import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Sidenav from './Sidenav'
import Topnav from './Topnav'

const PrivateRoute = () => {
  const [open, setOpen] = useState(true);
    const { user } = useSelector(state => state.auth)

  return user ? 
  <div className={`w-full flex dark:bg-dark-secondary bg-[#f8f9fc] dark:text-light-primary`}>
    <Sidenav open={open} setOpen={setOpen} />
    <div className='w-full'>
      <Topnav open={open} setOpen={setOpen} />
      <div className='lg:p-5'>
        <Outlet />
      </div>
    </div>
  </div> : <Navigate to='/login' replace />
}

export default PrivateRoute