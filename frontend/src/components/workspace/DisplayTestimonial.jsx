import React from 'react'
import workspaceStore from '../../store/workspaceStore'

function DisplayTestimonial() {

  const { workspace } = workspaceStore()
  const testimonials = workspace?.testimonials

  return (
    <div className='text-center'>
      <div className='text-2xl mb-6 font-medium'>Testimonials</div>
      {testimonials?.length > 0 ?  <div className='flex items-center justify-center gap-10'>
         
      </div> : 
      <div>No testimonials yet... emotional damage</div>}
    </div>
  )
}

export default DisplayTestimonial