import React from 'react'

function InboxElements({text,element}) {
  return (
    <div className='flex gap-6 mb-2 items-center w-28 hover:opacity-70'>
        <div className='text-2xl hover:cursor-pointer'>{element}</div>
        <h4 className='font-medium text-[rgb(54,57,67)] hover:cursor-pointer'>{text}</h4>
    </div>
  )
}

export default InboxElements