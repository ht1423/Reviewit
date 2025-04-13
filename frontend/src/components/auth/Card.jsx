import React, { useState } from 'react'
import Input from './Input'
import { useNavigate } from 'react-router-dom'
import authStore from '../../store/authStore'
import '../../App.css'

function Card({ action }) {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signup, signin } = authStore()

  const handleSubmit = async () => {
    if(action === 'signin'){
      await signin({ email, password, navigate })
    }
    else{
      await signup({ name, email, password, navigate })
    }
  }

  const handleInputChange = setter => e => setter(e.target.value)

  const toggleAction = action === 'signin' ? () => navigate('/auth?action=signup') : () => navigate('/auth?action=signin')

  return (
    <div className='flex flex-col p-10 rounded-xl  w-full max-w-md lg:max-w-[480px] mb-10 sm:mb-28'>
      <div className='text-[24px] sm:text-[30px] lg:text-[32px] whitespace-nowrap text-white mb-10 sm:mb-16 text-center font-medium poiret-one-regular tracking-tighter'>
        {action === 'signin' ? 'Sign in to your account' : 'Create your Reviewit account'}
      </div>

      <div className="space-y-4">
        {action === 'signup' && <Input text='Name' onChange={handleInputChange(setName)}/>}
        <Input text='Email' onChange={handleInputChange(setEmail)}/>
        <Input text='Password' onChange={handleInputChange(setPassword)}/>
      </div>

      <button 
        onClick={handleSubmit} 
        className='bg-indigo-800 text-white mt-8 hover:opacity-70 font-semibold p-3 px-8 rounded-lg transition-all duration-300 cursor-pointer text-xl'>
        {action === 'signin' ? 'Sign in' : 'Create account'}

      </button>
      <div className='text-center text-white/80 mt-6'>
        {action === 'signin' ? 'Don\'t have an account? ' : 'Already have an account? '}
        <span onClick={toggleAction} className='text-zinc-400 hover:underline cursor-pointer'>
          {action === 'signin' ? 'Sign up' : 'Sign in'}
        </span>
      </div>
    </div>
  )
}

export default Card
