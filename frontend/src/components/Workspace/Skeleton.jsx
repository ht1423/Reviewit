import React from 'react'
import Heading from './Heading'
import Inbox from './Inbox'
import TestimonialHolder from './TestimonialHolder'
import useAuthStore from '../../store/authStore'

function Skeleton() {

  const { workspace } = useAuthStore()

  const hasTestimonials = workspace?.testimonials?.length > 0

  return (
    <div className='mt-32 '>
        <Heading/>
        <div className='px-10 md:px-12 lg:px-24 xl:px-40 2xl:px-56'>
          <div className='w-full h-[1px] bg-gray-300 '></div>
        </div>
        <div className="lg:flex justify-center w-full">
          <div className=""><Inbox/></div> 
          <div className="flex justify-center w-full">
            <TestimonialHolder yes={hasTestimonials}/>
          </div>
        </div>
    </div>
  )
}

export default Skeleton