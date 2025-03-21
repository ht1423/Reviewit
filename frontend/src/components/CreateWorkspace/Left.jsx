import React from 'react'
import Points from './Points'
import VerticalLine from '../Workspace/VerticalLine'

const workspacePoints = [
  { main: '🚀 Get Started in Seconds!', sub: "No messy setup, no headaches! Just type in a name, add a little description, and boom—you’re ready! 🎉" },
  { main: '🔗 Everything in One Place!', sub: "Easily collect, manage, and showcase testimonials—text, images, and videos—all in one seamless workspace! 📦✨" },
  { main: '💖 Build Trust, Boost Your Brand!', sub: "Turn customer love into credibility! Your ‘Wall of Love’ makes sure everyone sees the amazing feedback. 💬🏆" }
];


function Left() {
  return (
    <div className='flex w-[27em] xl:w-[35em] pl-10 md:pl-12 lg:pl-24 xl:pl-40 2xl:pl-56 absolute'>
        <VerticalLine/>
        <div className='mt-8 ml-[-1px]'>
            {workspacePoints.map((point,index) => (
              <Points key={index} main={point.main} sub={point.sub}/>
            ))}
        </div>
    </div>
  )
}

export default Left