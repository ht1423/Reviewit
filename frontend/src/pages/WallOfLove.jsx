import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import workspaceStore from '../store/workspaceStore'
import Rating from '../components/workspace/Rating'

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
    <div className='min-h-screen bg-black text-white flex flex-col items-center px-10 py-16'>
      <h1 className='text-4xl sm:text-6xl font-extrabold tracking-tight text-center text-white whitespace-nowrap'>
        Wall of Love 💖
      </h1>

      {testimonials.length > 0 ? (
        <div className='wallColumn gap-6 space-y-6 mt-20 sm:mt-24'>
          {testimonials.map(t => (
            <div
              key={t.id}
              className='break-inside-avoid p-6 rounded-lg bg-zinc-900 hover:scale-[1.02] transition-all duration-300 shadow-lg border border-zinc-800'
            >
              <h2 className='text-2xl font-bold text-pink-400 mb-4'>{t.name}</h2>

              <p className='text-base text-zinc-200 mb-8 whitespace-pre-line leading-relaxed'>
                {t.content}
              </p>

              <div className='mb-8'>
                <Rating rating={t.rating} />
              </div>

              {t.type !== 'text' && (
                <div className='mt-2'>
                  {t.type === 'image' ? (
                    <img
                      src={t.mediaUrl}
                      alt="testimonial"
                      className="w-full max-h-[300px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[450px] xl:max-h-[500px] object-contain rounded-md shadow-md "
                    />
                  ) : (
                    <video
                      src={t.mediaUrl}
                      controls
                      className="w-full max-h-[300px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[450px] xl:max-h-[500px] object-contain rounded-md shadow-md "
                    />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className='text-lg text-zinc-400 mt-12'>No testimonials yet... 🤧</p>
      )}
    </div>
  )
}

export default WallOfLove

