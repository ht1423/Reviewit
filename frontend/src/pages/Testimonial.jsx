import React, { useState } from 'react'
import TestimonialForm from '../components/Testimonial/TestimonialForm'
import Navbar from '../components/Landing/Navbar'
import Left from '../components/Testimonial/Left'

function Testimonial() {

    const [formType, setFormType] = useState('text')

    return (
        <div className='h-screen w-full overflow-hidden'>
            <Navbar button={true} black={true}/>
            <div className='h-screen w-full flex justify-center lg:justify-start items-center mt-8 lg:pl-24 xl:pl-40 2xl:pl-56 lg:pr-10 xl:pr-20 gap-28 xl:gap-44'>
                <div className='hidden lg:block '>
                    <Left formType={formType}/>
                </div>
                <TestimonialForm formType={formType} setFormType={setFormType}/>
            </div>
        </div>
    )
}

export default Testimonial