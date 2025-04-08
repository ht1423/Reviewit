import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from '../pages/Landing'
import Auth from '../pages/Auth'
import CreateWorkspace from '../pages/CreateWorkspace'
import Workspace from '../pages/Workspace'
import Testimonial from '../pages/Testimonial'

function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/create' element={<CreateWorkspace/>}/>
        <Route path='/workspace/:workspaceId' element={<Workspace/>}/>
        <Route path='/workspace/:workspaceId/testimonial' element={<Testimonial/>}/>
    </Routes>
  )
}

export default AppRoutes