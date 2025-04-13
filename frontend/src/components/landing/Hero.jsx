import React from 'react'
import { useNavigate } from 'react-router-dom'
 
function Hero() {
  const navigate = useNavigate()

  return (
      <div className="text-center max-w-4xl transform -translate-y-10 space-y-10 mb-12 sm:mb-0"> 
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
          Build your workspace with ease
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-lg mx-auto leading-relaxed">
          Start creating and organizing your projects with Reviewit today.
        </p>
        <button 
          onClick={() => navigate('/create')} 
          className="text-white bg-indigo-800 py-2 px-8 sm:py-3 sm:px-10 text-lg font-semibold transition-all duration-300 transform hover:opacity-70 shadow-lg cursor-pointer uppercase " style={{
            letterSpacing: '3px',
            wordSpacing: '4px'
          }}>
          Create Workspace
        </button>
      </div>
    
  )
}

export default Hero
