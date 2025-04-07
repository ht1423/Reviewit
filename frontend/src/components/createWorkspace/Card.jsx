import React, { useState } from 'react'
import Input from '../auth/Input'
import { useNavigate } from 'react-router-dom'
import workspaceStore from '../../store/workspaceStore'

function Card() {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const { create } = workspaceStore()

  const handleClick = async () => {
    await create({ name, navigate })
  }

  return (
    <div className='flex flex-col space-y-8 border p-10'>
      <div className='text-2xl'>Create new workspace</div>
      <div>
        <Input text='Name' onChange={(e) => setName(e.target.value)}/>
      </div>
      <button onClick={handleClick} className='bg-blue-500 hover:opacity-70 text-white font-bold py-2 px-4 rounded cursor-pointer'>Submit</button>
      
    </div>
  )
}

export default Card