import React from 'react'
import { useNavigate } from 'react-router-dom'
import authStore from '../../store/authStore'

function DropDownMenu() {
    const navigate = useNavigate()
    const { logout } = authStore()

    const handleClick = () => {
        logout(navigate)
    }

  return (
    <div className='absolute top-14 right-14 bg-white p-2 border cursor-pointer'>
        <div onClick={() => navigate('/dashboard')} className='hover:bg-gray-200'>Dashboard</div>
        <div onClick={handleClick} className='hover:bg-gray-200'>Logout</div>
    </div>
  )         
}

export default DropDownMenu