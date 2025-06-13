import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";

const WorkspaceCard = ({ workspace }) => {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center px-6 sm:px-8 py-10 bg- rounded-2xl shadow-xl w-full sm:w-[500px] md:w-[550px] lg:w-[650px] xl:w-[750px] 2xl:w-[850px] my-6 space-y-10 transition-all duration-300 hover:scale-[1.01] border border-zinc-800 hover:border-white/20">

      <div className="text-2xl font-bold text-white text-center tracking-wide truncate max-w-[9em] sm:max-w-[11em] md:max-w-[13em] lg:max-w-[15em] xl:max-w-[18em]">
        {workspace.name?.charAt(0).toUpperCase() + workspace.name?.slice(1) }
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        <button
          onClick={() => navigate(`/workspace/${workspace.id}/wall-of-love`)}
          className="bg-rose-700 hover:opacity-70 text-white font-semibold w-[180px] h-[45px] flex justify-center items-center rounded-lg transition-all duration-300 shadow-md text-lg gap-2 cursor-pointer"
        >
          Wall of Love <FaHeart />
        </button>

        <button
          onClick={() => navigate(`/workspace/${workspace.id}`)}
          className="bg-indigo-800 hover:opacity-70 text-white font-semibold w-[180px] h-[45px] flex justify-center items-center rounded-lg transition-all duration-300 shadow-md text-lg gap-2 cursor-pointer"
        >
           Workspace <MdOpenInNew />
        </button>
      </div>

      <div className="text-base sm:text-lg text-white/60 text-center">
        Total Testimonials: <span className="text-white font-semibold">{workspace.testimonials?.length || 0}</span>
      </div>

    </div>
  );
};

export default WorkspaceCard;
