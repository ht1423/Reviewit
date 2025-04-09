import React from 'react'
import { useNavigate } from 'react-router-dom'
import authStore from '../../store/authStore'

function DropDownMenu() {
    const navigate = useNavigate()
    const logout = authStore(state => state.logout)

    const handleClick = async () => {
      try {
        await logout(navigate)
      }
      catch (err){
        console.error("Error logging out: ", err)
      }
    }

  return (
    <div className='absolute top-14 right-14 bg-white p-2 border cursor-pointer flex flex-col text-base'>

        <button type="button" onClick={() => navigate('/dashboard')} className='hover:bg-gray-200'>Dashboard</button>

        <button type="button" onClick={handleClick} className='hover:bg-gray-200'>Logout</button>
        
    </div>
  )         
}

export default DropDownMenu