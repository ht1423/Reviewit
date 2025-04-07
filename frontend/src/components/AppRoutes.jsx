import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from '../pages/Landing'
import Auth from '../pages/Auth'

function AppRoutes() {

  return (
    <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/auth' element={<Auth/>}/>
    </Routes>
  )
}

export default AppRoutes