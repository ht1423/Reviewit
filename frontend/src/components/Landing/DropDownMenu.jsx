import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore';

function DropDownMenu() {

  const { logout } = useAuthStore()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
    }
    catch (error){
      console.error('Error logging out:', error)
    }
  }

  const MenuItem = ({ onClick, children, className }) => {
    return (
      <div onClick={onClick} className={`px-4 py-3 cursor-pointer transition-all hover:bg-white/40 ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div className="absolute right-10 mt-4 w-44 bg-white/20 rounded-lg shadow-md text-[16px] text-black">
      <MenuItem onClick={() => navigate('/dashboard')} className='rounded-t-lg'>Dashboard</MenuItem>
      <MenuItem onClick={handleLogout} className='rounded-b-lg'>Log out</MenuItem>
    </div>
  );
}

export default DropDownMenu;
