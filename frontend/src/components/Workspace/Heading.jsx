import React, { use } from 'react'
import useAuthStore from '../../store/authStore'

function Heading() {

  const { workspace } = useAuthStore()

  return (
    <div className='text-center text-4xl whitespace-nowrap font-medium flex items-center justify-center gap-6 mb-12'>
        <div className='h-16 w-16 rounded-full flex items-center justify-center bg-[rgb(206,203,250)] pb-[2px] uppercase shrink-0 leading-none'>{workspace?.name[0]}</div>
        <h1 className='truncate max-w-[7em] md:max-w-[10em] lg:max-w-[18em] xl:max-w-[22em]'>{workspace?.name}</h1>
    </div>
  )
}

export default Heading