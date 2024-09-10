import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  const [Data, setData] = useState([]);
  const [Valid,setValid] = useState(false)
  return (
    <div className='h-[100%] w-[100%] overflow-x-hidden'>
      <Navbar/>
      <Outlet context={{ Data, setData , Valid , setValid}}></Outlet>
    </div>
  )
}

export default Layout