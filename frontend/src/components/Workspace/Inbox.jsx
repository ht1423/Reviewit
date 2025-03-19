import React from 'react'
import InboxElements from './InboxElements'
import Comment from './Comment'
import VerticalLine from './VerticalLine'

function Inbox() {
  return (
    <div className='mt-16 flex gap-10 px-10 md:px-12 lg:pl-24 xl:pl-40 2xl:pl-56'>

        <div className='flex justify-around items-center lg:flex-col lg:items-start min-w-full'>

              <div className='flex gap-12 md:gap-24'>

                <div>
                  <h1 className='text-[20px] text-[rgb(46,49,59)] font-medium'>Inbox</h1>

                  <div className='mt-6 ml-4'>
                      <InboxElements text='All' element="📥" />
                      <InboxElements text='Text' element="💬"/>
                      <InboxElements text='Image' element="🖼️"/>
                      <InboxElements text='Video' element="🎥"/>
                      <InboxElements text='Liked' element="❤️"/>
                  </div>
                </div>

                <div className='h-80 w-[1px] bg-gray-300 lg:hidden'></div>
              </div> 

            
            <Comment/>

        </div>

        <div className='hidden lg:block'><VerticalLine/></div>

    </div>
  )
}

export default Inbox
