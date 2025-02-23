import React, { useState } from 'react'
import Input from './Input'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { z } from 'zod'
import { useSetRecoilState } from 'recoil'
import { tokenState } from '../../store/atoms/token'

function Card({signin}) {

  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const setToken = useSetRecoilState(tokenState)

  const zodSignin = z.object({
    email: z.string().email('📧 Oops! That doesn’t look like a valid email!'),
    password: z
      .string()
      .min(8, '🔑 Your password is too short! It must be at least 8 characters long.')
      .max(128, '🚀 Whoa! That’s a long password! Keep it under 128 characters.')
  }).strict();

  const zodSignup = zodSignin.extend({
    name: z
      .string()
      .min(1, '👤 A name is required! Don’t be a mystery.')
      .max(100, '📝 That’s a long name! Keep it under 100 characters.')
  }).strict();


  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const endpoint = signin ? 'http://localhost:3001/api/auth/signin' : 'http://localhost:3001/api/auth/signup'

      const data = signin ? {email,password} : {name,email,password}

      const validation = signin ? zodSignin.safeParse(data) : zodSignup.safeParse(data)

      if(!validation.success){
        validation.error.errors.forEach((err) => toast.error(err.message))
        setLoading(false)
        return
      }

      await axios.post(endpoint, data, {
        withCredentials: true,  
      });

      setToken(true)

      if (signin) {
        toast.success('🎉 Welcome back! Time to conquer the day! 🚀');
      } else {
          toast.success('🥳 Account created! Let’s get started on your journey! 🌟');
      }

        navigate('/dashboard')
    }  

    catch (err) {
      toast.error(err.response?.data?.msg || 'Something went wrong! ❌')
      console.error(err.message)
    }

  setLoading(false)
  }

  return (
    <div className='absolute top-32 left-1/2 transform -translate-x-1/2 bg-white px-8 lg:px-10 xl:px-12 pt-10 pb-14 rounded-xl shadow-[0px_0px_10px_4px_rgba(19,19,19,0.1)] w-[26em] md:w-[27em] lg:w-[28em] xl:w-[30em]'>

      <div className='text-[27px] lg:text-[29px] font-semibold whitespace-nowrap text-[rgba(60,66,87)] tracking-tight mb-12'>{signin? 'Sign in to your account' : 'Create your Reviewit account'}</div>

      <form onSubmit={handleSubmit}>

        {!signin &&<Input text='Name' onChange={(e) => setName(e.target.value)}/>}

        <Input text='Email' onChange={(e) => setEmail(e.target.value)}/>

        <Input text='Password' onChange={(e) => setPassword(e.target.value)}/>

        <button type='submit' className='bg-[rgb(177,173,255)] w-full text-white py-3 rounded-lg my-6 font-semibold hover:opacity-70' disabled={loading}>{loading ? 'loading...' : signin ? 'Sign in' : 'Create account'}</button>

      </form>

      <div className='text-center text-sm font-medium text-[rgb(82,86,100)]'>{signin ? 'New to Reviewit?' : 'Already have an account?'}  <span onClick={() => signin ? navigate('/signup') : navigate('/signin')} className='text-blue-600 hover:underline cursor-pointer'>{signin ? 'Sign up' : 'Sign in'}</span></div>

    </div>
  )
}

export default Card