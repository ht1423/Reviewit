import React, { useEffect, useState } from 'react'
import workspaceStore from '../../store/workspaceStore'
import { useSearchParams } from 'react-router-dom'
import testimonialStore from '../../store/testimonialStore'
import TestimonialList from './TestimonialList'

function DisplayTestimonial() {

  const { workspace } = workspaceStore()
  const [searchParams] = useSearchParams()
  const type1 = searchParams.get('type')?.toLowerCase() || 'all'
  const { likeUpdate } = testimonialStore()
  const [allTestimonials, setAllTestimonials] = useState([])
  const [filteredTestimonials, setFilteredTestimonials] = useState()

  useEffect(() => {
    if(workspace?.testimonials){
      setAllTestimonials(workspace.testimonials)
    }
  },[workspace])

  useEffect(() => {
    let updated = [...(allTestimonials || [])]

    if(type1 === 'liked'){
      updated = updated?.filter(t => t.liked === true)
    }
    else if(type1 !== 'all') updated = updated?.filter(t => t.type === type1)

    setFilteredTestimonials(updated)
  },[allTestimonials,type1])

  
  const handleLike = async (testimonialId) => {
    await likeUpdate({testimonialId})

    setAllTestimonials(prev => 
      prev.map(t => t.id === testimonialId ? {
        ...t, liked: !t.liked
      } : t
    )
    )
  }

  return (
    <div className='text-center mb-20'>
      <div className='text-2xl mb-6 font-medium'>Testimonials</div>
        <TestimonialList testimonials={filteredTestimonials} handleLike={handleLike}/>
    </div>
  )
}

export default DisplayTestimonial