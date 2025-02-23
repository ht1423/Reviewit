import React, { use, useEffect, useRef, useState } from 'react'
import '../../App.css'
import { IoMdMenu } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import { tokenState } from '../../store/atoms/token';

function Navbar({button,black}) {

    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(false)
    const menuRef = useRef(null)
    const [token, setToken] = useRecoilState(tokenState)

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

    const handleClick = async () => {
        try{
            const endpoint = 'http://localhost:3001/api/auth/signout'
            await axios.post(endpoint, {} , { withCredentials: true })
            toast.success('👋 See you soon!')
            navigate('/')
            setToken(null)
        }
        catch (err){
            toast.error(err.response.data.msg || 'Something went wrong! ❌')
            console.error(err.message)
        }
    }

  return (
    <div className='absolute top-5 flex left-0 right-0 justify-between mx-10 md:mx-14 lg:mx-20 xl:mx-32 2xl:mx-48 items-center'>

        <div onClick={() => navigate('/')} className={`font-mono font-bold text-[20px] text-white cursor-pointer ${black ? 'text-[rgba(60,66,87)]' : 'text-white'}`}>Reviewit</div>

        {button && <div ref={menuRef} className='relative'>

            <div onClick={handleVisible} className='ml-20 cursor-pointer border px-3 py-1 rounded-full border-transparent text-white  bg-white/20 hover:bg-white/30'>

                <IoMdMenu className='text-[21px]' />

            </div>

            {isVisible && (

                <div className='absolute right-8 mt-6 w-40 bg-white/20 shadow-lg rounded-lg   ease-in-out transition-opacity duration-300 font-medium '>

                    <div onClick={() => 
                        token ? handleClick() : navigate('/signin')
                    }
                    className='block px-4 py-3 text-black/80 hover:bg-gray-200/30 hover:rounded-t-lg cursor-pointer'>{token ? 'Sign out' : 'Sign in'}</div>

                    <div onClick={() => navigate(token ? '/dashboard' : '/aboutus')} className='block px-4 py-3 text-black/80 hover:bg-gray-200/30 hover:rounded-b-lg cursor-pointer'>{token ? 'Dashboard' : 'About us'}</div>

            </div>)}

        </div>}

    </div>
  )
}

export default Navbar