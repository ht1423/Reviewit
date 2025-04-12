import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../components/landing/Navbar'
import Card from '../components/auth/Card'

function Auth() {
    const [searchParams] = useSearchParams()
    const action = searchParams.get('action')

  return (
    <div className='h-screen w-full bg-black/90 overflow-hidden'>
      <Navbar/>
      <div className='flex justify-center items-center h-screen w-full'>
        <Card action={action}/>     
      </div>
    </div>
  )
}

export default Auth
