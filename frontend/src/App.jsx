import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import { ToastContainer } from 'react-toastify'
import useAuthStore from './store/authStore';

function App() {

  const { fetchUser, isAuthenticated } = useAuthStore()

  useEffect(() => {
    if(isAuthenticated === null) {
      fetchUser()
    }
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App