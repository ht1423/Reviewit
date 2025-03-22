import React, { useEffect, useState } from "react";
import { CgArrowLongRight, CgArrowLongLeft } from "react-icons/cg";
import { GoHeartFill } from "react-icons/go";
import axios from 'axios';
import useAuthStore from "../../store/authStore";

const TestimonialCard = ({ _id, workspaceId, name, text, rating, mediaUrl, type, liked }) => {

  const [isLiked, setLiked] = useState(liked);
  const { updateTestimonial } = useAuthStore();

  useEffect(() => {
    setLiked(liked);
  }, [liked]);

  const handleClick = async () => {
    const newLiked = !isLiked;
    setLiked(newLiked);

    try {
      await axios.post("http://localhost:3001/api/testimonial/like", {
        testimonialId: _id,
        liked: newLiked,
        workspaceId
      }, {
        withCredentials: true
      });

      updateTestimonial(_id, { liked: newLiked });

    } catch (error) {
      console.error("Failed to update like", error);
      setLiked((prev) => !prev);
    }
  };

  return (
    <div className="relative break-inside-avoid w-full bg-white shadow-[0_0_10px_rgba(10,10,10,0.1)] rounded-xl px-4 sm:px-6 pt-2 pb-6 text-center border border-pink-100">
      <div 
        onClick={handleClick}
        className={`absolute top-2 right-3 text-xl h-8 w-8 flex justify-center items-center rounded-full hover:bg-gray-200 
          ${isLiked ? "text-red-500 scale-110" : "text-gray-300 scale-100"} 
          transition-all duration-700 ease-in-out cursor-pointer
        `}
      >
        <GoHeartFill />
      </div>

      <div className="flex justify-around items-center mt-6">
        <div><CgArrowLongLeft /></div>
        <div className='h-16 w-16 rounded-full flex items-center justify-center bg-[rgb(206,203,250)] font-medium text-3xl pb-[2px] uppercase shrink-0 leading-none'>{name[0]}</div>
        <div><CgArrowLongRight /></div>
      </div>

      <div className="flex justify-center mt-2 text-yellow-400 text-[24px]">
        {"★".repeat(rating)}
        {"☆".repeat(5 - rating)}
      </div>

      {mediaUrl && (
        <div className="mt-4 flex justify-center">
          {type === "video" ? (
            <video
              controls
              src={mediaUrl}
              className="rounded-xl h-auto max-h-[400px]"
            />
          ) : (
            <img
              src={mediaUrl}
              alt="testimonial"
              className="rounded-xl h-auto max-h-[350px] "
            />
          )}
        </div>
      )}

      <p className="text-gray-600 mt-3 text-[17px] font-medium oldenburg-regular testimonial-text">"{text}"</p>
      <h3 className="text-[14px] mt-6 font-semibold text-gray-800 tracking-widest uppercase testimonial-text">{name}</h3>
    </div>
  );
};

export default TestimonialCard;
