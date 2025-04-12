import React from 'react';
import { FaStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <FaStar
          key={i}
          className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        />
      ))}
    </div>
  );
};

export default Rating;
