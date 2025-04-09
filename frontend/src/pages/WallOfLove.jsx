import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import workspaceStore from '../store/workspaceStore'

function WallOfLove() {
  const { workspaceId } = useParams()
  const [testimonials, setTestimonials] = useState([])
  const { likedTestimonials } = workspaceStore()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await likedTestimonials({ workspaceId })
        setTestimonials(res?.data?.likedTestimonials || [])
      } catch (err) {
        console.error("Error fetching testimonials: ", err)
      }
    }

    fetchData()
  }, [workspaceId])

  return (
    <div className='min-h-screen bg-white text-black flex flex-col items-center p-6 gap-6'>
      <h1 className='text-5xl font-bold mb-16'>Wall of Love 💖</h1>

      {testimonials.length > 0 ? (
        <div className='flex flex-wrap justify-center gap-12'>
          {testimonials.map(t => (
            <div key={t.id} className='bg-gray-100 p-6 rounded-xl shadow-md w-full max-w-xs'>
              <h2 className='text-xl font-semibold'>{t.name}</h2>
              
              <p className='text-base text-gray-700 mt-2 mb-3'>{t.content}</p>

              <div className='mb-2'>⭐ {t.rating}</div>
              
              {t.type !== 'text' && (
                <div className='mt-2'>
                  {t.type === 'image' ? (
                    <img src={t.mediaUrl} alt="testimonial" className='rounded-lg w-full' style={{ objectFit: 'contain', maxHeight: 'auto' }} />
                  ) : (
                    <video src={t.mediaUrl} controls className='rounded-lg w-full' style={{ objectFit: 'contain', maxHeight: 'auto' }} />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className='text-lg text-gray-600'>No testimonials yet... 🤧</p>
      )}
    </div>
  )
}

export default WallOfLove
