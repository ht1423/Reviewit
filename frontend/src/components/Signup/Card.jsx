import React, { useState } from 'react'
import InputBox from './InputBox'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../../store/authStore'

function Card({login}) {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const {signup, signin} = useAuthStore()

  const handleAuth = async (e) => {
    e.preventDefault()
    if(login){
      await signin(email, password, navigate)
    }else{
      await signup(name, email, password, navigate)
    }
  }
  

  return (
    <div className='absolute top-1/2 left-1/2 mt-4 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md shadow-[0_0_20px_rgba(10,10,10,0.1)] rounded-lg px-10 lg:px-12 py-14 w-[27em] md:w-[28em] lg:w-[30em] lg:right-10'>

      <form onSubmit={handleAuth} className='flex flex-col'>

        <h1 className='text-[28px] text-[rgb(46,49,59)] tracking-tight whitespace-nowrap font-semibold text-left mb-10'>{login? 'Sign in to your account' : 'Create your Reviewit account'}</h1>

        <div>
          {!login && <InputBox text='Name' type='text' onChange={(e) => setName(e.target.value)}/>}
          <InputBox text='Email' type='text' onChange={(e) => setEmail(e.target.value)}/>
          <InputBox text='Password' type='password' onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <button type='submit' className='bg-[rgb(170,165,255)] font-medium mt-8 mb-4 text-white h-12 rounded-lg hover:opacity-70 transition-opacity duration-300 ease-in-out'>{login? 'Sign in' : 'Create account'}</button>

        <p className='text-center text-[15px] font-medium text-[rgb(46,49,59)]'>{login? 'New to Reviewit? ' : 'Already have an account? '}<span onClick={() => {login? navigate('/signup') : navigate('/signin')}} className='text-blue-500 text-[14px] hover:underline tranform transition ease-in-out duration-300 cursor-pointer'>{login? 'Sign up' : 'Sign in'}</span></p>

      </form>
    </div>
  )
}

export default Card