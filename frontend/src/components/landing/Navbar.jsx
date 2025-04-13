import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authStore from '../../store/authStore'
import DropDownMenu from '../landing/DropDownMenu'
import '../../App.css'

function Navbar({showButton}) {
    const navigate = useNavigate()
    const authenticated = authStore(state => state.authenticated)
    const me = authStore(state => state.me)
    const user = authStore(state => state.user)
    const [visible, setVisible] = useState(false)
    const ref = useRef()

    useEffect(() => {
      me().catch(err => console.error("Error fetching user: ", err))      
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
    <div className='flex justify-between items-center px-4 sm:px-10 md:px-12 lg:px-24 xl:px-40 py-4'>

        <button
          onClick={() => navigate('/')}
          className='cursor-pointer text-xl xs:text-2xl sm:text-3xl md:text-4xl text-white font-extrabold major-mono-display-regular '
        >
          Reviewit
        </button>

        {showButton && (
        authenticated === false
        
          ? <button 
          onClick={() => {
            navigate('/auth?action=signin')
          }} 
          className="border-2 border-white text-white text-sm sm:text-[17px] font-semibold py-3 px-4 sm:py-3 sm:px-8 uppercase cursor-pointer transition-all duration-300 bg-transparent hover:bg-white hover:text-black hover:border-transparent shadow-md" style={{
            wordSpacing: '4px',
            letterSpacing: '3px'
          }}>
          Get Started
        </button>
        
          : 
          <div 
          ref={ref} 
          onClick={() => setVisible(prev => !prev)} 
          className={`border-2 border-white rounded-full flex items-center justify-center text-[16px] sm:text-[22px] font-medium relative h-8 w-8 sm:h-12 sm:w-12 cursor-pointer transition-all duration-300 hover:bg-white ${visible ? 'bg-white text-black' : ' text-white'} hover:text-black hover:border-transparent active:scale-95`}>
          <div className="flex items-center justify-center w-full h-full">{user?.name[0]?.toUpperCase()}</div>
          {visible && <DropDownMenu />}
        </div>


        )}
    </div>
  )
}

export default Navbar