import React from 'react'
import Navbar from '../components/landing/Navbar'
import Card from '../components/testimonial/Card'

function Testimonial() {

  return (
    <div className='bg-black min-h-screen w-full '>
      <Navbar showButton={true}/>
      <div className='flex justify-center items-center flex-1 w-full px-6 pt-10 pb-16'>
        <Card/>
      </div>
    </div>

  )
}

export default Testimonial