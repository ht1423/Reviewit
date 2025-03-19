import React from 'react'

function Comment() {
  return (
    <div className="lg:mt-20 md:mr-10 md:w-64 w-48 text-center">
      <div className="text-gray-700 flex flex-col justify-center items-center space-y-4">
        <p className="font-semibold animate-bounce text-6xl mb-2">💖</p>

        <p className="font-semibold text-lg md:text-xl">
          ✨ Psst... You just got even more stunning! Unfair! 😏
        </p>

        <p className="font-medium text-sm animate-wiggle">
          (Warning: Excessive charm may cause distractions! 🚨)
        </p>
      </div>
    </div>
  )
}

export default Comment
