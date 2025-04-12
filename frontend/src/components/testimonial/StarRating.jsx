import React, { useState } from 'react'

const StarRating = ({ value, onChange }) => {
  const [hovered, setHovered] = useState(0)

  return (
    <div className="flex justify-center gap-1 text-3xl cursor-pointer">
      {[1, 2, 3, 4, 5].map((index) => (
        <span
          key={index}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(index)}
          className={`transition ${
            (hovered || value) >= index ? 'text-yellow-400' : 'text-gray-400'
          }`}
        >
          ★
        </span>
      ))}
    </div>
  )
}

export default StarRating
