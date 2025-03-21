import React from "react";
import TestimonialCard from "../Testimonial/TestimonialCard";
import CreateTestimonial from "../Testimonial/CreateTestimonial";
import useAuthStore from "../../store/authStore";

function TestimonialHolder() {

  const { testimonials } = useAuthStore(state => state);
  const testimonialLength = testimonials?.length

  return (
    <div className="mt-16 flex flex-col items-center w-full">
      <CreateTestimonial />

      {testimonialLength > 0 ? (
        <>
          <h2 className="text-center text-[28px] text-[rgb(46,49,59)] font-medium mb-6">
            What They Say 😊
          </h2>
          <div className="flex flex-wrap justify-center gap-10 mx-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
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
