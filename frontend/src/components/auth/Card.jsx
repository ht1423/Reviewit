import React, { useState } from 'react'
import Input from './Input'
import { useNavigate } from 'react-router-dom'
import authStore from '../../store/authStore'

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

  return (
    <div className='flex flex-col space-y-8 border p-10'>
      <div className='text-2xl'>{action === 'signin' ? 'Sign in to your account' : 'Create your Reviewit account'}</div>
      <div>
        {action === 'signup' && <Input text='Name' onChange={(e) => setName(e.target.value)}/>}
        <Input text='Email' onChange={(e) => setEmail(e.target.value)}/>
        <Input text='Password' onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button onClick={handleSubmit} className='bg-blue-500 hover:opacity-70 text-white font-bold py-2 px-4 rounded cursor-pointer'>{action === 'signin' ? 'Sign in' : 'Create account'}</button>
      <div className='text-center'>{action === 'signin' ? 'Don\'t have an account? ' : 'Already have an account? '}<span onClick={action === 'signin' ? () => navigate('/auth?action=signup') : () => navigate('/auth?action=signin')} className='text-blue-600 hover:underline cursor-pointer'>{action === 'signin' ? 'signup' : 'signin'}</span></div>
    </div>
  )
}

export default Card