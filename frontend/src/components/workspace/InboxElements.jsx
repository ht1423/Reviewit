import React from 'react'

function InboxElements({type}) {
  return (
    <div className='border h-8 w-20 flex justify-center items-center hover:bg-gray-200 cursor-pointer'>
      {type}
    </div>
  )
}

export default InboxElements