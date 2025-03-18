import React from 'react'
import { BackgroundGradientAnimationDemo } from '../components/Landing/BackgroundGradientAnimationDemo'
import Navbar from '../components/Landing/Navbar'
import Card from '../components/Signup/Card'
import '../App.css'

function Signin() {
  return (
    <div className='h-screen w-full relative'>
        <div className='signin-background'>
            <BackgroundGradientAnimationDemo/>
        </div>
        <Navbar />
        <Card login={true}/>
    </div>
  )
}

export default Signin