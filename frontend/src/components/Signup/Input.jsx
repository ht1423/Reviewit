import React from 'react'

function Input({text,onChange}) {
  return (
    <div className='mb-5 space-y-3'>
      <div className='text-[rgb(65,70,88)] text-[15px] font-medium'>{text}</div>
      <input onChange={onChange} type={text === 'Password' ? 'password' : 'text'} className='border-[1px] border-gray-300 w-full h-10 rounded-lg focus:shadow-[0px_0px_4px_2px_rgba(210,205,255,4)] transition duration-300 outline-none px-4 cursor-text'></input>
    </div>
  )
}

export default Input