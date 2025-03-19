import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { CgArrowLongLeft } from "react-icons/cg";

const TestimonialCard = ({ name, position, review, stars, image }) => {
  return (
    <div className="bg-white shadow-[0_0_20px_rgba(10,10,10,0.1)] rounded-xl px-10 py-6 w-96 text-center borde mt-10 border border-pink-200">
      <div className="flex space-x-16 justify-center items-center ">
        <div><CgArrowLongLeft /></div>
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
        />
        <div><CgArrowLongRight /></div>
      </div>
      
      <div className="flex justify-center mt-2 text-yellow-400 text-[24px]">
        {"★".repeat(stars)}
        {"☆".repeat(5 - stars)}
      </div>

      <p className="text-gray-600 mt-3 text-[17px] font-medium oldenburg-regular">"{review}"</p>

      <h3 className="text-[14px] mt-6 font-semibold text-gray-800 tracking-widest uppercase">{name}</h3>

      <p className="text-xs mt-1 tracking-widest text-gray-500 uppercase">{position}</p>

    </div>
  );
};

export default TestimonialCard;
