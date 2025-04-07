import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './components/AppRoutes'
import { ToastContainer } from 'react-toastify'

function App() {
  
  return (
    <BrowserRouter>
      <AppRoutes/>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App