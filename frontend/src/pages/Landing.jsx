import React from 'react'
import Navbar from '../components/landing/Navbar'
import Hero from '../components/landing/Hero'

function Landing() {

  return (
    <div className='h-screen w-full bg-black/90 overflow-hidden'>
        <Navbar showButton={true}/>
        <div className="flex items-center justify-center h-screen px-4 sm:px-10 md:px-12">
          <Hero/>
        </div>
    </div>
  )
}

export default Landing