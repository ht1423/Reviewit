import React from 'react'
import useCheckAuth from '../../hooks/useCheckAuth'
import { Routes, Route } from 'react-router-dom'
import Landing from '../../pages/Landing'
import Signup from '../../pages/Signup'
import Signin from '../../pages/Signin'
import CreateWorkspace from '../../pages/CreateWorkspace'
import Workspace from '../../pages/Workspace'
import Testimonial from '../../pages/Testimonial'

function AppRoutes() {
  
  useCheckAuth()
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/create' element={<CreateWorkspace />} />
      <Route path='/get/:workspaceId' element={<Workspace />} />
      <Route path='/:workspaceId/addTestimonial' element={<Testimonial />} />
    </Routes>
  )
}

export default AppRoutes
