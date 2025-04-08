import React from 'react'
import Navbar from '../components/landing/Navbar'
import Card from '../components/testimonial/Card'

function Testimonial() {

  return (
    <div className=''>
        <Navbar showButton={true}/>
        <div className='flex justify-center items-center h-screen'>
            <Card/>
        </div>
    </div>
  )
}

export default Testimonial