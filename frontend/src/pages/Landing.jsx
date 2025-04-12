import React from 'react'
import Navbar from '../components/landing/Navbar'
import Hero from '../components/landing/Hero'

function Landing() {

  return (
    <div className='h-screen w-full bg-black/90 overflow-hidden'>
        <Navbar showButton={true}/>
        <Hero/>
    </div>
  )
}

export default Landing