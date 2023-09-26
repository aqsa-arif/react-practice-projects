import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Root = () => {
  return (
    <Fragment>
      <Navbar />
      <main> 
        <Outlet />   
      </main>
    </Fragment>
  )
}

export default Root
