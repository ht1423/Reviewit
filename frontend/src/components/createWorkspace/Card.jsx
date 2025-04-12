import React, { useState } from 'react';
import Input from '../auth/Input';
import { useNavigate } from 'react-router-dom';
import workspaceStore from '../../store/workspaceStore';

function Card() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const create = workspaceStore((state) => state.create);

  const handleSubmit = async () => {
    await create({ name, navigate });
  };

  return (
    <div className="flex flex-col p-10 rounded-xl w-full max-w-md lg:max-w-[480px] ">
      <div className="text-[30px] lg:text-[32px] whitespace-nowrap text-white mb-16 text-center font-medium poiret-one-regular tracking-tight">Create New Workspace</div>
      
      <div className="space-y-4">
        <Input text="Workspace Name" onChange={(e) => setName(e.target.value)} />
      </div>

      <button
        onClick={handleSubmit}
        className="bg-indigo-800 text-white mt-8 hover:opacity-70 font-semibold p-3 px-8 rounded-lg transition-all duration-300 cursor-pointer text-xl"
      >
        Submit
      </button>
    </div>
  );
}

export default Card;
