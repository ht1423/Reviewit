import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './components/app/AppRoutes'
import { ToastContainer } from 'react-toastify'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <AppRoutes/>
      <ToastContainer // for notifications
        newestOnTop
        draggable
        theme="dark" 
      />
    </BrowserRouter>
  )
}

export default App