import React from 'react'

const TestimonialCard = ({ testimonial, handleLike }) => {
  return (
    <div key={testimonial.id} className='flex flex-col items-center justify-center'>
      <button 
        onClick={() => handleLike(testimonial.id)} 
        className={`p-2 rounded cursor-pointer ${testimonial.liked ? 'bg-red-400 hover:bg-gray-200' : 'bg-gray-300 hover:bg-red-300'}`}
      >
        liked
      </button>
      <div className='text-xl font-medium'>{testimonial.name}</div>
      <div className='text-lg'>{testimonial.content}</div>
      <div>{testimonial.rating}</div>
      <div>
        {testimonial.type !== 'text' && (
          testimonial.type === 'image' ? 
            <img src={testimonial.mediaUrl} alt="testimonial" /> : 
            <video controls src={testimonial.mediaUrl} />
        )}
      </div>
    </div>
  )
}

export default TestimonialCard
