import React from 'react'
import Navbar from '../components/Landing/Navbar'
import { BackgroundGradientAnimationDemo } from '../components/Landing/BackgroundGradientAnimationDemo'
import Card from '../components/Signup/Card'

function Signup() {
  return (
    <div className='h-screen w-full overflow-hidden relative'>
      <div className='signin-background'>
        <BackgroundGradientAnimationDemo/>
      </div>
      <Navbar/>
      <Card/>
    </div>
  )
}

export default Signup