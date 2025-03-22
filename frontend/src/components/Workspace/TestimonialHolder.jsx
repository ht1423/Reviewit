import React from "react";
import TestimonialCard from "../Testimonial/TestimonialCard";
import useAuthStore from "../../store/authStore";

function TestimonialHolder() {

  const { workspace, display, filterMode } = useAuthStore()
  const testimonials = workspace?.testimonials ?? []

  let filteredTestimonials = []

  if(filterMode === 'wall'){
    filteredTestimonials = testimonials.filter((t) => t.liked === true)
  }
  else if(display === 'All'){
    filteredTestimonials = testimonials
  }
  else {
    filteredTestimonials = testimonials.filter((t) => t.type === display.toLowerCase())
  }

  return (
    <div className="mt-16 md:mt-0 lg:mt-0 flex flex-col items-center w-full">

      {filteredTestimonials.length > 0 ? (
        <>
          <h2 className="text-center text-[28px] text-[rgb(46,49,59)] font-medium mb-16">
            What They Say 😊
          </h2>
          <div className="masonry">
            {filteredTestimonials.map((testimonial) => (
              <div key={testimonial._id} className="mb-14 w-full break-inside-avoid">
                <TestimonialCard key={testimonial._id} {...testimonial} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>No testimonial found</p>
      )}
    </div>
  );
}

export default TestimonialHolder;
