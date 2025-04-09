import React from 'react'
import TestimonialCard from './TestimonialCard'

const TestimonialList = ({ testimonials, handleLike }) => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-10'>
      {testimonials?.length > 0 ?
      (
        testimonials.map(testimonial => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} handleLike={handleLike} />
      ))) : 
      <div>No testimonials found</div>
      }
    </div>
  )
}

export default TestimonialList
