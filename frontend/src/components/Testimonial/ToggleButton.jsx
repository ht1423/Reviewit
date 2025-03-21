import React from 'react'

function ToggleButton({media,set,formType}) {

    const handleChange = ((e) => {
        e.preventDefault()
        set(!media)
    })

  return (
    <div className='flex mt-6 items-center gap-2'>
            <button onClick={handleChange}
                    className={`w-10 h-6 flex items-center rounded-full pl-1 transition-all duration-300 ${
                        media ? "bg-indigo-500" : "bg-gray-300"
                    }`}><div
                    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-all duration-300 ${
                      media ? "translate-x-4" : "translate-x-0"
                    }`}
                  ></div>
            </button>
            <h4 className='text-[15px] font-medium text-[rgb(82,83,88)]'>{formType === 'image' ? 'Image only ?' : 'Video only ?'}</h4>
        </div>
  )
}

export default ToggleButton