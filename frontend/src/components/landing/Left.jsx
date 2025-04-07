import React from 'react'
import { useNavigate } from 'react-router-dom'

function Left() {
  const navigate = useNavigate()

  return (
    <div className='mt-10'>
        <button onClick={() => navigate('/create')} className='border p-2 hover:bg-gray-200 cursor-pointer'>Create Workspace</button>
    </div>
  )
}

export default Left