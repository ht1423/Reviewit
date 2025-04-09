import React from 'react'

function Input({text, onChange}) {

  const inputType = text?.toLowerCase() === 'password' ? 'password' : 'text'

  return (
    <div className='space-y-3 mb-4'>
      <div>{text}</div>
      <input type={inputType} onChange={onChange} className='p-2 border w-full h-8'/>
    </div>
  )
}

export default Input