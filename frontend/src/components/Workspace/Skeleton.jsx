import React from 'react'
import Heading from './Heading'
import Inbox from './Inbox'
import TestimonialHolder from './TestimonialHolder'

function Skeleton() {

  return (
    <div className='mt-32'>
        <Heading/>
        <div className='px-10 md:px-12 lg:px-24 xl:px-40 2xl:px-56'>
          <div className='w-full h-[1px] bg-gray-300 '></div>
        </div>
        <div className="w-full md:flex justify-between mt-16">
          <div className=""><Inbox/></div> 
          <div className="flex justify-center w-full">
            <TestimonialHolder />
          </div>
        </div>
    </div>
  )
}

export default Skeleton