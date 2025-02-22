import React from 'react'
import Left from './Left'

function Skeleton() {
  return (
    <div className='absolute top-40 mx-10 md:mx-14 lg:mx-20 xl:mx-32 2xl:mx-48'>
        <Left/>
    </div>
  )
}

export default Skeleton