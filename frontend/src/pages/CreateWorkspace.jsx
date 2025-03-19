import React from 'react'
import Navbar from '../components/Landing/Navbar'
import { BackgroundGradientAnimationDemo } from '../components/Landing/BackgroundGradientAnimationDemo'
import Hero from '../components/CreateWorkspace/Hero'

function CreateWorkspace() {
  return (
    <div className='h-screen w-full overflow-hidden relative'>
        <div className='create-background'>
            <BackgroundGradientAnimationDemo/>
        </div>
        <Navbar black={true} button={true}/>
        <Hero/>
    </div>
  )
}

export default CreateWorkspace