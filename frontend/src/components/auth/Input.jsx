import React from 'react'

function Input({text, onChange}) {
  return (
    <div className='space-y-3 mb-4'>
      <div>{text}</div>
      <input onChange={onChange} className='p-2 border w-full h-8'></input>
    </div>
  )
}

export default Input