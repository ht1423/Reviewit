import React from 'react'
import InboxElements from './InboxElements'

function Inbox() {
  return (
    <div className='text-center space-y-6'>
      <div className='text-xl font-medium'>Inbox</div>
      <div className='flex justify-around items-center'>
        <InboxElements type='All'/>
        <InboxElements type='Text'/>
        <InboxElements type='Image'/>
        <InboxElements type='Video'/>
        <InboxElements type='Liked'/>
      </div>
    </div>
  )
}

export default Inbox