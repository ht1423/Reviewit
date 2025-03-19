import React from 'react'

function Points({main,sub}) {
  return (
    <div className='mb-8 flex'>
        <div className='h-6 w-1 bg-blue-500'></div>
        <div className='space-y-2 text-[rgb(46,49,59)] ml-8'>
            <h4 className='font-medium'>{main}</h4>
            <p>{sub}</p>
        </div>
    </div>
  )
}

export default Points