import React from 'react'
import Points from './Points'
import VerticalLine from '../Workspace/VerticalLine'

function Left() {
  return (
    <div className='flex w-[27em] xl:w-[35em] pl-10 md:pl-12 lg:pl-24 xl:pl-40 2xl:pl-56 absolute'>
        <VerticalLine/>
        <div className='mt-8 ml-[-1px]'>
            <Points main='Get Started Quickly' sub='Create your workspace in seconds—no hassle, no complicated setup. Simply fill in the name and description, and you are ready to go!'/>
            <Points main='Seamless Integration' sub='Easily collect, manage, and display testimonials in various formats—text, images, and videos—on your public wall.'/>
            <Points main='Boost Your Brand' sub='Showcase real customer feedback in a beautifully designed public wall of love, making it easier for visitors to trust you.'/>
        </div>
    </div>
  )
}

export default Left