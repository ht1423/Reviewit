import React from 'react';
import Heading from './Heading';
import DisplayTestimonial from './DisplayTestimonial';
import Inbox from './Inbox';
import TestimonialButton from './TestimonialButton';
import EmbedCode from './EmbedCode';
import { useNavigate, useParams } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import workspaceStore from '../../store/workspaceStore';

function Skeleton() {
  const { workspaceId } = useParams();
  const navigate = useNavigate();
  const workspace = workspaceStore((state) => state.workspace);

  return (
    <div className="my-16">
        <Heading text={workspace?.name}/>
        <EmbedCode />
      <div className='flex flex-col md:flex-row justify-center items-center mt-12 sm:mt-20 gap-10 md:gap-16'>
      <TestimonialButton 
          nav={() => navigate(`/workspace/${workspaceId}/testimonial?type=text`)} 
          text="Write a testimonial" 
        />

        <button
          onClick={() => navigate(`/workspace/${workspaceId}/wall-of-love`)}
          className="bg-rose-700 hover:opacity-70 text-white font-semibold w-[235px] h-[55px] flex justify-center items-center rounded-lg transition-all duration-300 shadow-md text-lg  gap-3 whitespace-nowrap cursor-pointer"
        >
          Wall of Love
          <span className='flex gap-2 text-xl'><FaHeart  />

          </span>
        </button>
      </div>
      <Inbox />

      <DisplayTestimonial />
    </div>
  );
}

export default Skeleton;
