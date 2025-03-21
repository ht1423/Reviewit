import React from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import { PlusCircle, Sparkles, Heart } from "lucide-react"; // Add some cool icons!

function TestimonialIcons() {
  const { workspace } = useAuthStore();

  return (
    <Link
      to={`/${workspace?._id}/addTestimonial`}
      className=" flex flex-col items-center hover:scale-105 transition-transform duration-300"
    >
      <div className="relative">
        <PlusCircle className="text-indigo-500 text-5xl cursor-pointer animate-pulse" />
        <Sparkles className="absolute -top-3 -left-3 text-yellow-400 text-xl animate-bounce" />
        <Heart className="absolute -bottom-3 -right-3 text-red-400 text-xl animate-bounce" />
      </div>

      <h4
        className="text-xl font-mono tracking-tight cursor-pointer text-gray-700 w-[20em] text-center mt-7"
        style={{ wordSpacing: "-2px" }}
      >
        Click here to make this page less sad. 
      </h4>
      <div className="text-3xl mt-3">😢 → 😍</div>
    </Link>
  );
}

export default TestimonialIcons;
