import React from 'react'

function TestimonialIcons({icon, text}) {
  return (
    <div className='space-y-3 flex flex-col items-center w-36 hover:opacity-70 flex-wrap'>
        <div className='text-4xl cursor-pointer'>{icon}</div>
        <h4 className='text-xl font-mono tracking-tight cursor-pointer' style={{
            wordSpacing: '-2px'
        }}>{text}</h4>
    </div>
  )
}

export default TestimonialIcons