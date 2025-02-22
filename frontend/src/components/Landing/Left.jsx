import React from 'react';
import { useNavigate } from 'react-router-dom';
function Left() {

    const navigate = useNavigate()

  return (
    <div className="w-[26em] md:w-[31em] lg:w-[33em] xl:w-[36em]">
      <div 
        className="text-[55px] md:text-[60px] lg:text-[65px] font-semibold leading-tight" 
        style={{
          lineHeight: '1.2',
          background: 'linear-gradient(to bottom, rgb(30, 6, 6), rgb(70, 7, 7), rgb(3, 19, 60), rgb(8, 10, 28))', 
          WebkitBackgroundClip: 'text', 
          backgroundClip: 'text', 
          color: 'transparent',
        }}>
        Transform Customer Voices into Impactful Testimonials
      </div>

      <div className="text-[18px] lg:text-[19px] font-normal  mt-14 text-[rgb(59,73,86)]">
      Showcase the voices of your satisfied customers, build a community of trust, and watch as your brand credibility grows, helping you foster deeper customer loyalty and drive long-term, sustainable growth.
      </div>

      <button onClick={() => navigate('/workspace/create')} className="mt-14 px-10 py-3 text-white rounded-full bg-gray-900 hover:opacity-70 transition duration-300 text-[17px] font-semibold font-mono">
        Create Workspace
      </button>
    </div>
  );
}

export default Left;
