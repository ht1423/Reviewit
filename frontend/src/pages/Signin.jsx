import React from 'react'
import Navbar from '../components/Landing/Navbar'
import { BackgroundGradientAnimationDemo } from '../components/Landing/BackgroundGradientAnimationDemo'
import Card from '../components/Signup/Card'

function Signin() {
  return (
    <div className='h-screen w-full overflow-hidden relative'>
      <div className='signup-background'>
        <BackgroundGradientAnimationDemo/>
      </div>
      <Navbar black={true}  />
      <Card signin={true}/>
    </div>
  )
}

export default Signin