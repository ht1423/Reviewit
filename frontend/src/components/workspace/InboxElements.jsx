import React from 'react'
import { useSearchParams } from 'react-router-dom'

function InboxElements({type}) {

  const [searchParams, setSearchParams] = useSearchParams()
  const displayType = searchParams.get('type')

  const handleClick = () => setSearchParams({ type: type.toLowerCase() })
  

  return (
    <div onClick={handleClick} className={`border h-8 w-20 flex justify-center items-center hover:bg-gray-200 cursor-pointer ${displayType === type.toLowerCase()  ? 'bg-gray-300' : ''}`}>
      {type}
    </div>
  )
}

export default InboxElements