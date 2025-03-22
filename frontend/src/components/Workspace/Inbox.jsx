import React from 'react'
import InboxElements from './InboxElements'
import CreateTestimonial from "../Testimonial/CreateTestimonial";
import VerticalLine from './VerticalLine';
import { TiHeart } from "react-icons/ti";
import useAuthStore from '../../store/authStore';

function Inbox() {

  const { setWallOfLoveMode } = useAuthStore()

  const handleClick = () => {
    setWallOfLoveMode()
  }

  return (
    <div className='flex gap-20 px-10 md:pr-0 md:pl-12 lg:pl-24 xl:pl-40 2xl:pl-56 '>
      <div className='flex gap-10'>
        <div>
            <h1 className='text-[20px] text-[rgb(46,49,59)] font-medium'>Inbox</h1>

            <div className='mt-6 ml-4'>
                <InboxElements type='All' element="📥"/>
                <InboxElements type='Text' element="💬"/>
                <InboxElements type='Image' element="🖼️"/>
                <InboxElements type='Video' element="🎥"/>
            </div>
            <div onClick={handleClick} className='mt-10 dancing-script font-medium text-[24px] flex items-center gap-2 cursor-pointer whitespace-nowrap'>Wall of love <span className='text-red-500'><TiHeart /></span>
            </div>
        </div>


        <div>
          <VerticalLine height='20em'/>
        </div>
      </div>

    </div>
  )
}

export default Inbox
