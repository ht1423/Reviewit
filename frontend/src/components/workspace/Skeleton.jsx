import React from 'react'
import Heading from './Heading'
import InboxElements from './InboxElements'
import DisplayTestimonial from './DisplayTestimonial'
import Inbox from './Inbox'
import TestimonialButton from './TestimonialButton'

function Skeleton() {
  return (
    <div className='px-10 md:px-12 lg:px-24 xl:px-40 mt-14 space-y-16'>
        <Heading/>
        <Inbox/>
        <TestimonialButton/>
        <DisplayTestimonial/>
    </div>
  )
}

export default Skeleton