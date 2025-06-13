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
    <div className='flex justify-between items-center px-4 sm:px-10 md:px-12 lg:px-24 xl:px-40 py-4 bg-black/80 backdrop-blur-sm shadow-lg'>
        <button
          onClick={() => navigate('/')}
          className='cursor-pointer text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold major-mono-display-regular bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text hover:from-blue-500 hover:to-purple-600 transition-all duration-300'
          style={{ textShadow: '0 0 10px rgba(59, 130, 246, 0.5)' }}
        >
          Reviewit
        </button>

        <div className='flex items-center space-x-6 md:space-x-10'>
          
          {showButton && (
            authenticated === false
              ? <button 
                onClick={() => {
                  navigate('/auth?action=signin')
                }} 
                className="border-2 border-blue-400 text-white text-sm sm:text-[17px] font-semibold py-2 px-4 sm:py-2 sm:px-6 uppercase cursor-pointer transition-all duration-300 bg-transparent hover:bg-blue-400 hover:text-black hover:border-transparent shadow-md hover:shadow-lg hover:shadow-blue-400/50"
                style={{
                  wordSpacing: '4px',
                  letterSpacing: '3px'
                }}>
                Get STarted
              </button>
              : 
              <div 
                ref={ref} 
                onClick={() => setVisible(prev => !prev)} 
                className={`border-2 border-blue-400 rounded-full flex items-center justify-center text-[16px] sm:text-[22px] font-medium relative h-8 w-8 sm:h-12 sm:w-12 cursor-pointer transition-all duration-300 hover:bg-blue-400 ${visible ? 'bg-blue-400 text-black shadow-lg shadow-blue-400/50' : ' text-white'} hover:text-black hover:border-transparent active:scale-95`}>
                <div className="flex items-center justify-center w-full h-full">{user?.name[0]?.toUpperCase()}</div>
                {visible && <DropDownMenu />}
              </div>
          )}
        </div>
    </div>
  )
}

export default Navbar