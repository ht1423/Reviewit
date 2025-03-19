import React, { useState } from 'react'
import InputBox from '../Signup/InputBox'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../../store/authStore'

function Card() {

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const navigate = useNavigate()
  const { create, get } = useAuthStore()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await create(name, description, navigate)

    if(response?.workspaceId){
      await get(response.workspaceId, navigate)
    }

  }

  return (
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 bg-white/80 backdrop-blur-md shadow-[0_0_20px_rgba(10,10,10,0.1)] rounded-lg px-10 lg:px-12 py-14 w-[27em] md:w-[28em] xl:w-[32em] xl:ml-10'>

      <form onSubmit={handleSubmit} className='flex flex-col'>

        <h1 className='text-[28px] text-[rgb(46,49,59)] xtracking-tight whitespace-nowrap font-semibold text-left mb-10'>Create your workspace</h1>

        <div>
          <InputBox onChange={((e) => setName(e.target.value))} text='Name' type='text'/>
          <h4 className='font-medium text-[16px] mb-2 text-[rgb(46,49,59)]'>Description</h4>
          <textarea onChange={(e) => setDescription(e.target.value)} className='scrollbar-hide h-44 w-full bg-transparent border-[1px] border-gray-300 rounded-lg outline-none px-4 py-2 focus:shadow-[0_0_2px_3px_rgba(177,173,255,0.4)] transform transition ease-in-out duration-300'></textarea>
        </div>

        <button type='submit' className='bg-[rgb(170,165,255)] font-medium mt-8 mb-4 text-white h-12 rounded-lg hover:opacity-70'>Submit</button>

      </form>
    </div>
  )
}

export default Card