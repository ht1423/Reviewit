import React from 'react'
import { BackgroundGradientAnimationDemo } from '../components/Landing/BackgroundGradientAnimationDemo'
import '../App.css'
import Navbar from '../components/Landing/Navbar'
import Skeleton from '../components/Landing/Skeleton'

function Landing() {
  return (
    <div className='h-screen w-full relative overflow-hidden'>
        <div className='landing-background'><BackgroundGradientAnimationDemo/></div>
        <Navbar/>
        <Skeleton/>
    </div>
  )
}

export default Landing