import React from 'react'
import { useSearchParams } from 'react-router-dom'

function InboxElements({type}) {

  const [searchParams, setSearchParams] = useSearchParams()
  const displayType = searchParams.get('type')

  const handleClick = () => {
    setSearchParams({ type })
  }

  return (
    <div onClick={handleClick} className='border h-8 w-20 flex justify-center items-center hover:bg-gray-200 cursor-pointer'>
      {type}
    </div>
  )
}

export default InboxElements