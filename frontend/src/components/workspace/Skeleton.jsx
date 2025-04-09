import React from 'react'
import Heading from './Heading'
import DisplayTestimonial from './DisplayTestimonial'
import Inbox from './Inbox'
import TestimonialButton from './TestimonialButton'
import EmbedCode from './EmbedCode'
import { useNavigate, useParams } from 'react-router-dom'

function Skeleton() {

  const {workspaceId} = useParams()

  const navigate = useNavigate()
  return (
    <div className='px-10 md:px-12 lg:px-24 xl:px-40 mt-14 space-y-16 text-center'>
        <Heading/>
        <Inbox/>
        <TestimonialButton/>
        <button 
          onClick={() => navigate(`/workspace/${workspaceId}/wall-of-love`)} 
          className='bg-red-400 hover:opacity-70 text-white font-bold py-2 px-4 rounded cursor-pointer'>
          Wall of Love
        </button>

        <EmbedCode/>
        <DisplayTestimonial/>
    </div>
  )
}

export default Skeleton