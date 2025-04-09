import React from 'react'
import InboxElements from './InboxElements'

function Inbox() {
  return (
    <div className='text-center space-y-6'>
      <div className='text-xl font-medium'>Inbox</div>
      <div className='flex justify-around items-center'>
        {['All','Text','Image','Video','Liked'].map((type) => (
          <InboxElements key={type} type={type} />
        ))}
      </div>
    </div>
  )
}

export default Inbox