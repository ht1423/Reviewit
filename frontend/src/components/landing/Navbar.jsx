import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authStore from '../../store/authStore'
import DropDownMenu from '../landing/DropDownMenu'

function Navbar({showButton}) {
    const navigate = useNavigate()
    const { authenticated } = authStore()
    const [visible, setVisible] = useState(false)
    const ref = useRef()

    const { me } = authStore()
      
    useEffect(() => {
        me()
    },[])

    useEffect(() => {
      const checkIfClickedOutside = (e) => {
        if(visible && ref.current && !ref.current.contains(e.target)) {
          setVisible(false)
        }
      }

      document.addEventListener('mousedown', checkIfClickedOutside)

      return () => {
        document.removeEventListener('mousedown', checkIfClickedOutside)
      }
    },[visible])

  return (
    <div className='flex justify-between items-center px-10 md:px-12 lg:px-24 xl:px-40 py-4'>

        <Link to='/' className='cursor-pointer text-xl font-semibold'>Reviewit</Link>

        {showButton && (

          authenticated === false ? <button onClick={() => navigate('/auth?action=signin')} className='border p-2 hover:bg-gray-200 cursor-pointer'>Get Started</button> : 

          <div className='' ref={ref}>

            <div onClick={() => setVisible(pre => !pre)} className='border h-8 w-8 rounded-full flex items-center justify-center text-xl cursor-pointer'>{authenticated?.name[0]?.toUpperCase()}</div>

            {visible && <DropDownMenu/>}

          </div>
          )}
    </div>
  )
}

export default Navbar