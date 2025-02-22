import React, { useEffect, useRef, useState } from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";

function Navbar() {

    const [isVisible, setIsVisible] = useState(false)
    const menuRef = useRef(null)

    const handleVisible = () => {
        setIsVisible(!isVisible)
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)){
                setIsVisible(false)
            }
        }

        document.addEventListener("mousedown",handleClickOutside)

        return () => document.removeEventListener("mousedown", handleClickOutside)
    },[])

  return (
    <div className='absolute top-5 flex left-0 right-0 justify-between mx-10 md:mx-14 lg:mx-20 xl:mx-32 2xl:mx-48 items-center'>

        <Link to='/' className='font-mono font-bold text-[21px] text-white cursor-pointer'>Reviewit</Link>

        <div ref={menuRef} className='relative'>

            <div onClick={handleVisible} className='ml-20 cursor-pointer border px-3 py-1 rounded-full border-transparent text-white  bg-white/20 hover:bg-white/30'>

                <IoMdMenu className='text-[21px]' />

            </div>

            {isVisible && (

                <div className='absolute right-8 mt-6 w-40 bg-white/20 shadow-lg rounded-lg   ease-in-out transition-opacity duration-300 font-medium '>

                <Link to='/signin' className='block px-4 py-3 text-black/80 hover:bg-gray-200/30 hover:rounded-t-lg'>Sign In</Link>

                <Link to='/dashboard' className='block px-4 py-3 text-black/80 hover:bg-gray-200/30 hover:rounded-b-lg'>Dashboard</Link>

            </div>)}

        </div>

    </div>
  )
}

export default Navbar