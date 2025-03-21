import React, { useState } from 'react'
import { Star } from 'lucide-react'


function StarRating({rating,setRating}) {

    const [hover, setHover] = useState(0)

  return (
    <div className='flex gap-1 items-center justify-center'>
        {
            Array(5).fill(0).map((_,index) => (
                <Star onClick={() => setRating(index + 1)} 
                    onMouseEnter={() => setHover(index + 1)}
                    onMouseLeave={() => setHover(0)}
                    key={index} 
                    className={`h-6 w-6 cursor-pointer transition-all ${index < (hover || rating) ? "fill-yellow-500 text-yellow-500" : "text-gray-300"}`}/>
            ))
        }
    </div>
  )
}

export default StarRating