import React from 'react'

function Input({ text, onChange }) {
  const inputType = text?.toLowerCase() === 'password' ? 'password' : 'text'

  return (
    <div className='space-y-4 mb-6'>
      <div className='text-base text-white/80 font-medium'>{text}</div>
      <input
        type={inputType}
        onChange={onChange}
        className='p-3 rounded-md w-full h-10 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent shadow-sm'
        
      />
    </div>
  )
}

export default Input
