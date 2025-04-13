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
    <div className="absolute top-4 right-0 sm:top-10 sm:right-4 p-4 rounded-lg  w-48 flex flex-col tracking-widest text-white">
      <button 
        onClick={() => navigate('/dashboard')} 
        className="uppercase py-2 px-4 rounded-md text-sm font-medium text-left transition-colors duration-300 relative group cursor-pointer">
        Dashboard
        <span className="absolute bottom-0 left-4 w-0 max-w-28 h-0.5 bg-white transition-all duration-1000 group-hover:w-full"></span>
      </button>
      <button 
        onClick={handleClick} 
        className="uppercase py-2 px-4 rounded-md mt-2 text-sm font-medium text-left transition-colors duration-300 relative cursor-pointer group">
        Logout
        <span className="absolute bottom-0 left-4 w-0 h-0.5  max-w-20 bg-white transition-all duration-1000 group-hover:w-full"></span>
      </button>
    </div>
  )
}

export default DropDownMenu
