import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import DropDownMenu from './DropDownMenu';
import useAuthStore from '../../store/authStore';

function Navbar({button,black}) {

    const [visible, setvisible] = useState(false)
    const navigate = useNavigate()
    const ref = useRef(null)
    const { isAuthenticated } = useAuthStore()
    const{ user } = useAuthStore()

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

    console.log(user?.name)

  return (
    <div className='absolute top-0 flex justify-between right-0 left-0 px-10 md:px-12 lg:px-24 xl:px-40 2xl:px-56 pt-4 z-10 items-center'>

        <Link to='/' className={`${black? 'text-black' : 'text-white'} text-[21px] font-[800] handlee-regular `}>Reviewit</Link>

        {button && 
            ( !isAuthenticated? <button onClick={() => navigate('/signin')} className={`font-mono  border-2 rounded-full pl-6 pr-4 py-[5px]  ${black? 'border-black text-black hover:bg-black hover:text-white' : 'text-white border-white hover:text-black hover:border-black'} flex items-center  transform transition-all duration-300 ease-in-out`}>Get Started <MdOutlineKeyboardArrowRight className='ml-2 text-xl'/>
            </button>

            : <div ref={ref} onClick={handleClick} className=' relative'>
                <h4 className={`flex items-center justify-center ${black? 'bg-[rgb(177,173,255)]' : ' bg-white/20 '} text-xl text-white cursor-pointer rounded-full h-10 w-10 uppercase pb-[2px]`}>{user?.name[0]}</h4>

                {visible && <DropDownMenu/>} 
                
            </div>)
        }

    </div>
  )
}

export default Navbar