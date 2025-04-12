import React from 'react'
import TestimonialCard from './TestimonialCard'

const TestimonialList = ({ testimonials, handleLike }) => {
  return (
    <div className='flex flex-col justify-center items-center  mx-4 sm:max-0'>
      {testimonials?.length > 0 ?
      (
        testimonials.map(testimonial => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} handleLike={handleLike} />
      ))) : 
      <div className='text-xl text-zinc-400'>No testimonials found 😭😭</div>
      }
    </div>
  )
}

export default TestimonialList
