import React, { useEffect, useState } from 'react'
import workspaceStore from '../../store/workspaceStore'
import { useSearchParams } from 'react-router-dom'
import testimonialStore from '../../store/testimonialStore'

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
      prev.map(t => t._id === testimonialId ? {
        ...t, liked: !t.liked
      } : t
    )
    )
  }

  return (
    <div className='text-center'>
      <div className='text-2xl mb-6 font-medium'>Testimonials</div>
      {filteredTestimonials?.length > 0 ?  <div className='flex flex-wrap items-center justify-center gap-10'>
         {filteredTestimonials.map((t) => {
           return (
             <div key={t._id} className='flex flex-col items-center justify-center'>
              <button onClick={() => handleLike(t._id)} className={` p-2 rounded cursor-pointer ${t.liked === true ? 'bg-red-400 hover:bg-gray-200' : 'bg-gray-300 hover:bg-red-300'}`}>liked</button>
               <div className='text-xl font-medium'>{t.name}</div>
               <div className='text-lg'>{t.content}</div>
               <div>{t.rating}</div>
               <div>{t.type !== 'text' &&
                (t.type === 'image' ? 
                  <img src={t.mediaUrl}/> : 
                  <video src={t.mediaUrl}/>
                )}</div>
                
             </div> 
           )
         })}
      </div> : 
      <div>No testimonials yet... emotional damage</div>}
    </div>
  )
}

export default DisplayTestimonial