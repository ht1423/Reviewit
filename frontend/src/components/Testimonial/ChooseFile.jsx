import React from 'react'

function ChooseFile({formType, onFileChange}) {
  return (
    <div className="mt-6">
        <h4 className="text-[15px] font-medium text-gray-700 mb-2">{formType === 'image' ? 'Add an image' : 'Add a video'}</h4>
        <label className="flex items-center justify-center w- h-10 border border-gray-300 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200 transition-all duration-300">
            <input type="file" className="hidden" onChange={onFileChange}/>
            <span className="text-gray-600 text-sm font-medium">Choose File</span>
        </label>
    </div>
  )
}

export default ChooseFile