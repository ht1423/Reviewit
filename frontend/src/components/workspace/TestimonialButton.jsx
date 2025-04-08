import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function TestimonialButton() {
  const navigate = useNavigate()
  const { workspaceId } = useParams()

  return (
    <div className='text-center'>
      <button onClick={() => navigate(`/workspace/${workspaceId}/testimonial?type=text`)} className='bg-gray-500 hover:opacity-70 text-white font-bold py-2 px-4 rounded cursor-pointer'>Write a testimonial</button>
    </div>
  )
}

export default TestimonialButton