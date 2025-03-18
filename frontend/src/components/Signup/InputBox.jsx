import React from 'react'

function InputBox({text,type,onChange}) {
  return (
    <div className='mb-6 space-y-2 text-[rgb(46,49,59)]'>
      <h4 className='font-medium text-[16px]'>{text}</h4>
      <input type={type} onChange={onChange} className='outline-none bg-transparent border-[1px] border-gray-300 h-10 w-full rounded-lg px-4 cursor-text focus:shadow-[0_0_2px_3px_rgba(177,173,255,0.4)] transform transition ease-in-out duration-300'></input>
    </div>
  )
}

export default InputBox