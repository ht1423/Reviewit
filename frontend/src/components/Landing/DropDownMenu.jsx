import React from 'react';
import { useNavigate } from 'react-router-dom';

function DropDownMenu() {

    const navigate = useNavigate()

  return (
    <div className="absolute right-10 mt-4 w-44 bg-white/20 rounded-lg shadow-md text-[16px] text-black">
      <ul className="flex flex-col">
        <li onClick={() => navigate('/dashboard')} className="px-4 py-2 rounded-t-lg cursor-pointer transition-all  hover:bg-white/40">
          Dashboard
        </li>
        <li onClick={() => navigate('/')} className="px-4 py-2 rounded-b-lg cursor-pointer transition-all  hover:bg-white/40">
          Log out
        </li>
      </ul>
    </div>
  );
}

export default DropDownMenu;
