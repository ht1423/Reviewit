import React from 'react'
import useAuthStore from '../../store/authStore'

function InboxElements({type,element}) {

  const setDisplay = useAuthStore((state) => state.setDisplay)

  const handleClick = () => {
    setDisplay(type)
  }

  return (
    <div onClick={handleClick} className='flex gap-6 mb-2 items-center w-28 hover:opacity-70'>
        <div className='text-2xl hover:cursor-pointer'>{element}</div>
        <h4 className='font-medium text-[rgb(54,57,67)] hover:cursor-pointer'>{type}</h4>
    </div>
  )
}

export default InboxElements