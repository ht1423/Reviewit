import React from "react";
import TestimonialCard from "../Testimonial/TestimonialCard";
import CreateTestimonial from "../Testimonial/CreateTestimonial";

const testimonials = [
  {
    name: "Aarav Mehta",
    position: "Product Manager",
    review: "This platform is a game changer! Helped me build trust with clients effortlessly. The feedback system is seamless and easy to use.",
    stars: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Ishita Sharma",
    position: "Freelance Designer",
    review: "Love how easy it is to showcase client testimonials. My portfolio looks so much more professional now, and I’ve gained more credibility!",
    stars: 4,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Rohan Kapoor",
    position: "Software Engineer",
    review: "A must-have tool for anyone who values customer feedback! Makes collecting and displaying testimonials super simple. Highly recommend!",
    stars: 5,
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "Meera Nair",
    position: "Marketing Consultant",
    review: "I was struggling to collect client testimonials, but this platform made it incredibly easy. Now, I can showcase positive feedback effortlessly!",
    stars: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Devansh Gupta",
    position: "Startup Founder",
    review: "An essential tool for any business! It has helped us build social proof and gain trust from potential customers. The UI is clean and user-friendly.",
    stars: 5,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Sanya Verma",
    position: "Content Creator",
    review: "Super easy to use! My audience can now share feedback quickly, and I can feature their words on my website with just a few clicks.",
    stars: 4,
    image: "https://randomuser.me/api/portraits/women/23.jpg",
  },
];


function TestimonialHolder({ yes }) {
  return (
    <div className="mt-16 flex flex-col items-center w-full">
        <CreateTestimonial yes={yes} />

      {yes && (
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
      )}
    </div>
  );
}


export default TestimonialHolder;
