import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { CgArrowLongLeft } from "react-icons/cg";

const TestimonialCard = ({ name, review, stars }) => {
  return (
    <div className="bg-white shadow-[0_0_20px_rgba(10,10,10,0.1)] rounded-xl px-10 py-6 w-96 text-center borde mt-10 border border-pink-200">
      <div className="flex space-x-16 justify-center items-center ">
        <div><CgArrowLongLeft /></div>
        <div className='h-16 w-16 rounded-full flex items-center justify-center bg-[rgb(206,203,250)] font-medium text-3xl pb-[2px] uppercase shrink-0 leading-none'>{name[0]}</div>
        <div><CgArrowLongRight /></div>
      </div>
      
      <div className="flex justify-center mt-2 text-yellow-400 text-[24px]">
        {"★".repeat(stars)}
        {"☆".repeat(5 - stars)}
      </div>

      <p className="text-gray-600 mt-3 text-[17px] font-medium oldenburg-regular">"{review}"</p>

      <h3 className="text-[14px] mt-6 font-semibold text-gray-800 tracking-widest uppercase">{name}</h3>


    </div>
  );
};

export default TestimonialCard;
