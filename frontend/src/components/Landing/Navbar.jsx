import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import DropDownMenu from './DropDownMenu';
import useAuthStore from '../../store/authStore';

function Navbar({button,black}) {

    const [visible, setvisible] = useState(false)
    const navigate = useNavigate()
    const ref = useRef(null)
    const { isAuthenticated } = useAuthStore()

    const handleClick = () => {
        setvisible(!visible)
    }

    useEffect(() => {
        const checkIfClickedOUtside = (e) => {
            if(visible && ref.current && !ref.current.contains(e.target)){
                setvisible(false)
            }
        }
        document.addEventListener('mousedown', checkIfClickedOUtside)

        return () => {
            document.removeEventListener('mousedown', checkIfClickedOUtside)
        }
    },[visible])

  return (
    <div className='absolute top-0 flex justify-between right-0 left-0 px-10 md:px-12 lg:px-24 xl:px-32 2xl:px-48 pt-4'>

        <Link to='/' className={`${black? 'text-black' : 'text-white'} text-[21px] font-[800] handlee-regular `}>Reviewit</Link>

        {button && 
            ( !isAuthenticated? <button onClick={() => navigate('/signin')} className='font-mono text-white border-2 rounded-full pl-6 pr-4 py-[5px] flex items-center hover:text-black hover:border-black transform transition-all duration-300 ease-in-out'>Get Started <MdOutlineKeyboardArrowRight className='ml-2 text-xl'/>
            </button>

            : <div ref={ref} onClick={handleClick} className='text-white text-xl cursor-pointer bg-white/20 px-4 py-1 rounded-full relative '><IoMdMenu />

                {visible && <DropDownMenu/>} 
                
            </div>)
        }

    </div>
  )
}

export default Navbar