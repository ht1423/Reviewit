import React from 'react';
import { useSearchParams } from 'react-router-dom';

function InboxElements({ type }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const displayType = searchParams.get('type');

  const handleClick = () => setSearchParams({ type: type.toLowerCase() });

  return (
    <div
      onClick={handleClick}
      className={`border-2 border-transparent hover:border-gray-500 h-9 w-28 flex justify-center items-center rounded-lg cursor-pointer transition-all duration-200 ${
        displayType === type.toLowerCase() ? 'bg-gray-300 text-black' : 'bg-gray-700'
      }`}
    >
      {type}
    </div>
  );
}

export default InboxElements;
