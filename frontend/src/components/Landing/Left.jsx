import React from 'react'
import { useNavigate } from 'react-router-dom'
function Left() {

    const navigate = useNavigate()

  return (
    <div className='w-[26em] md:w-[28em] lg:w-[30em] '>
        <h1 className='text-[56px] md:text-[60px] lg:text-[64px] text-black/80 font-semibold' style={{
          lineHeight: '1.27',
          letterSpacing: '-1px'
        }}> Effortless testimonials to build trust & grow your brand</h1>
        <p className='mt-12 text-[19px] text-gray-800 tracking-tight lg:text-[20px]'>Join thousands of businesses using ReviewIt to effortlessly collect, beautifully showcase, and seamlessly embed authentic testimonials—boost trust, engage customers, and drive more sales.</p>
        <button onClick={() => navigate('/create')} className='mt-12 text-[18px] font-mono text-white bg-gray-900 rounded-full px-10 tracking-tight py-[8px] hover:opacity-70 transform transition ease-in-out duration-300' aria-label='Create a new workspace'>Create Workspace</button>
    </div>
  )
}

export default Left