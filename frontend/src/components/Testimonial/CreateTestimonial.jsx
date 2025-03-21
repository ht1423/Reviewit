import React from 'react'
import TestimonialIcons from './TestimonialIcons'

function CreateTestimonial({yes}) {
  return (
    <div className='mb-32 w-full max-w-[29em] md:max-w-[38em] xl:max-w-[50em]'>
        <div className='flex flex-col justify-center items-center'>
            <h2 className=" text-[28px] text-[rgb(46,49,59)] font-medium ">{yes? 'Create Testimonial 😍' : 'No Testimonial yet 😥'}</h2>
            <div className='w-96 h-[1px] bg-gray-300 mb-10 mt-4'></div>
        </div>
        <div className='flex justify-around '>
            <TestimonialIcons/>
        </div>
    </div>
  )
}

export default CreateTestimonial