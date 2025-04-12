import React from 'react';

function TestimonialButton({text, nav}) {

  return (
    <div className="text-center ">
      <button
        onClick={nav}
        className="bg-indigo-800 hover:opacity-70 cursor-pointer text-white font-semibold w-[235px] h-[55px] flex justify-center items-center rounded-lg transition-all duration-300 shadow-md text-lg whitespace-nowrap"
      >
        {text}
      </button>
    </div>
  );
}

export default TestimonialButton;
