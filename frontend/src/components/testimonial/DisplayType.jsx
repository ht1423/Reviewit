import React from 'react'

function DisplayType({displayType, onClick}) {

  return (
    <div onClick={onClick} className='border h-8 w-20 flex justify-center items-center cursor-pointer hover:bg-gray-200'>{displayType}</div>
  )
}

export default DisplayType