import React from 'react'

function FormType({formType,setFormType}) {
  return (
    <div className="flex justify-center mb-6  rounded-lg py-1 ">
            <div className="flex items-center justify-around w-[16em]">
                {["text", "image", "video"].map((type) => (
                <button
                    key={type}
                    onClick={() => setFormType(type)}
                    className={`px-4 py-[6px] my-1 text-sm font-medium transition-all duration-300 rounded-md 
                    ${formType === type ? "bg-indigo-500 text-white shadow-md" : "bg-gray-100 text-gray-600"}
                    hover:bg-indigo-400 hover:text-white`}
                >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
                ))}
            </div>
        </div>
  )
}

export default FormType