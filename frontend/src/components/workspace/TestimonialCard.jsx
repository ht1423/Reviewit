import React from 'react';
import Rating from './Rating';
import authStore from '../../store/authStore';

const TestimonialCard = ({ testimonial, handleLike }) => {

  const user = authStore(state => state.user)

  return (
    <div className="flex flex-col items-center justify-center px-6 sm:px-8 py-10 sm:py-10 bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl shadow-lg hover:shadow-xl w-full sm:w-[500px] md:w-[550px] lg:w-[650px] xl:w-[750px] 2xl:w-[850px] my-6 space-y-8 transition-all duration-300 hover:scale-[1.02] border border-zinc-800 hover:border-white/20">
      
      {(user && (user?.id === testimonial?.userId)) && <button
        onClick={() => handleLike(testimonial?.id)}
        className="self-end text-2xl transition-all duration-300 hover:scale-125"
      >
        <span className={`cursor-pointer ${testimonial.liked ? 'text-pink-500 ' : 'text-white/30'} hover:text-pink-400`}>
          ❤️
        </span>
      </button>}

      <div className="flex items-center gap-1 ">
        <Rating rating={testimonial.rating}/>
      </div>

      <div className="text-2xl font-bold text-white text-center tracking-wide">
        {testimonial.name}
      </div>

      <div className="text-lg text-white/70 text-center italic px-2 leading-relaxed">
        {testimonial.content ? `"${testimonial.content}"` : ''}
      </div>

      {testimonial.type !== 'text' && (
        <div className="w-full mt-4">
          {testimonial.type === 'image' ? (
            <img
            src={testimonial.mediaUrl}
            alt="testimonial"
            className="w-full max-h-[300px] sm:max-h-[350px] lg:max-h-[400px] xl:max-h-[450px] object-contain rounded-md shadow-md "
          />
        ) : (
          <video
            controls
            className="w-full max-h-[300px] sm:max-h-[350px] lg:max-h-[400px] xl:max-h-[450px] object-contain rounded-md shadow-md"
            src={testimonial.mediaUrl}
          />
    
          )}
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;
