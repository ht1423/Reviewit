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
    <div className='flex flex-col p-10 rounded-2xl w-full max-w-md lg:max-w-[480px]  backdrop-blur-sm shadow-2xl mb-24 sm:mb-12'>
      <div className='text-[26px] sm:text-[30px] lg:text-[32px] whitespace-nowrap text-white mb-8 sm:mb-12 text-center font-semibold tracking-tighter bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
        {action === 'signin' ? 'Sign in to your account' : 'Create your Reviewit account'}
      </div>

      <div className="space-y-6">
        {action === 'signup' && <Input text='Name' onChange={handleInputChange(setName)}/>}
        <Input text='Email' onChange={handleInputChange(setEmail)}/>
        <Input text='Password' onChange={handleInputChange(setPassword)}/>
      </div>

      <button 
        onClick={handleSubmit} 
        className='bg-gradient-to-r from-indigo-600 to-indigo-800 text-white mt-7 hover:from-indigo-500 hover:to-indigo-700 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] font-semibold p-2.5 px-8 rounded-xl transition-all duration-300 cursor-pointer text-lg transform hover:scale-[1.02] active:scale-[0.98]'>
        {action === 'signin' ? 'Sign in' : 'Create account'}
      </button>
      <div className='text-center text-white/70 mt-6 text-sm sm:text-base'>
        {action === 'signin' ? 'Don\'t have an account? ' : 'Already have an account? '}
        <span onClick={toggleAction} className='text-zinc-400 hover:underline cursor-pointer'>
          {action === 'signin' ? 'Sign up' : 'Sign in'}
        </span>
      </div>
    </div>
  )
}

export default Card
