import React from 'react'
import Left from './Left'
import Card from './Card'

function Hero() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 w-full h-screen absolute top-0'>
        <div className='hidden lg:block absolute mt-28 2xl:mt-32'>
            <Left/>
        </div>
        <div className=''><Card/></div>
    </div>
  )
}

export default Hero