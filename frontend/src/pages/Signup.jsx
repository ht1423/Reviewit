import React from 'react'
import { BackgroundGradientAnimationDemo } from '../components/Landing/BackgroundGradientAnimationDemo'
import Navbar from '../components/Landing/Navbar'
import Card from '../components/Signup/Card'
import '../App.css'
function Signup() {
  return (
    <div className='h-screen w-full relative overflow-hidden'>
        <div className='signup-background'>
            <BackgroundGradientAnimationDemo/>
        </div>
        <Navbar black={true}/>
        <Card/>
    </div>
  )
}

export default Signup