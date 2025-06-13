import React from 'react'
import { useNavigate } from 'react-router-dom'
import authStore from '../../store/authStore'

function DropDownMenu() {
  const navigate = useNavigate()
  const logout = authStore(state => state.logout)

  const handleClick = async () => {
    try {
      await logout(navigate)
    } catch (err) {
      console.error("Error logging out: ", err)
    }
  }

  return (
    <div className="absolute top-12 right-4 sm:top-16 sm:right-4 p-2 rounded-lg w-36 sm:w-48 flex flex-col tracking-widest text-white border border-white/10">
      <button 
        onClick={() => navigate('/dashboard')} 
        className="uppercase py-2 px-4 rounded-md text-xs lg:text-sm font-medium text-left transition-colors duration-300 relative group cursor-pointer">
        Dashboard
        <span className="absolute bottom-0 left-4 w-0 max-w-28 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 group-hover:w-full"></span>
      </button>
      <button 
        onClick={handleClick} 
        className="uppercase py-2 px-4 rounded-md mt-2 text-xs lg:text-sm font-medium text-left transition-colors duration-300 relative cursor-pointer group">
        Logout
        <span className="absolute bottom-0 left-4 w-0 h-0.5 max-w-20 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 group-hover:w-full"></span>
      </button>
    </div>
  )
}

export default DropDownMenu
