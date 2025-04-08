import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import DisplayType from './DisplayType'
import workspaceStore from '../../store/workspaceStore'
import StarRating from './StarRating'
import Input from '../auth/Input'
import axios from 'axios'
import testimonialStore from '../../store/testimonialStore'
import { toast } from 'react-toastify'

function Card() {
    const [searchParams, setSearchParams] = useSearchParams()
    const { workspace, get } = workspaceStore()
    const { workspaceId } = useParams()
    const displayType = searchParams.get('type')
    const [rating, setRating] = useState(0)
    const [mediaOnly, setMediaOnly] = useState(false)
    const [fileName, setFileName] = useState("")
    const [name, setName] = useState("")
    const [content, setContent] = useState("")
    const [fileType, setFileType] = useState("")
    const { createTestimonial } = testimonialStore()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchWorkspace = async () => {
            await get({workspaceId})
        }

        fetchWorkspace()
    },[workspaceId])

    const handleClick = (type) => {
        setSearchParams({ type })
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]

        if(!file) return

        setFileName(file)
        setFileType(file.type)
    }

    const fileTypeCheck = () => {
        const imageType = ['image/png', 'image/jpeg', 'image/jpg']
        const videoType = ['video/mp4', 'video/ogg', 'video/webm']

        if(displayType === 'image' && !imageType.includes(fileType)){
            return false
        }

        else if(displayType === 'video' && !videoType.includes(fileType)){
            return false
        }

        return true
    }

    const handleSubmit = async () => {
        try {
            if(!name){
                toast.error("Name is required")
                return
            }

            let mediaUrl = ""

            if(displayType !== 'text'){

                if(!fileType){
                    toast.error("Please select a file")
                    return     
                }

                const result = fileTypeCheck()

                if(!result){
                    toast.error("Invalid file type. For image only: png, jpeg, jpg. For video only: mp4, ogg, webm")
                    return
                }

                if(displayType !== 'text' && !mediaOnly && !content){
                    return toast.error("Please add content")
                }

                const signRes = await axios.get('http://localhost:3001/api/generate-signature')

                const { signature, timestamp, apiKey } = signRes.data

                const formData = new FormData()

                formData.append("file", fileName)
                formData.append("signature", signature)
                formData.append("timestamp", timestamp)
                formData.append("api_key", apiKey)
                formData.append("folder", "Testimonial")     

                const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dlqocjzkf/auto/upload", formData,{
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })

                mediaUrl = uploadRes.data.secure_url

                console.log("mediaUrl", mediaUrl)
            }

            const data = {
                name,
                content,
                rating,
                type: displayType,
                mediaUrl
            }

            await createTestimonial({data, workspaceId, navigate})

        }
        catch (err) {
            console.log(err)
            toast.error(err.response.data.msg)
        }
    }

    return (
        <div className='border p-10 text-center space-y-8'>

            <div className='flex justify-around items-center gap-8'>
                <DisplayType displayType='Text' onClick={() => handleClick('text')}/>
                <DisplayType displayType='Image' onClick={() => handleClick('image')}/>
                <DisplayType displayType='Video' onClick={() => handleClick('video')}/>
            </div>

            <div className='text-2xl font-medium'>Add a {displayType} testimonial to</div>

            <div>{workspace?.name}</div>

            <div className='flex justify-center'>
              <StarRating value={rating} onChange={setRating}/> 
            </div>

            {displayType !== 'text' && <button
                onClick={() => setMediaOnly(prev => !prev)}
                className={`${
                    mediaOnly ? 'bg-blue-500' : 'bg-gray-500'
                } hover:opacity-70 text-white font-bold py-2 px-8 rounded cursor-pointer`}
                >
                {displayType === 'image' ? 'image only' : 'Video only'
                }
            </button>}

            {displayType !== 'text' && <div className="flex items-center justify-center">
                <label className="bg-pink-500 hover:opacity-70 text-white font-semibold py-2 px-6 rounded cursor-pointer transition">        
                    <input
                    type="file"
                    accept={displayType === 'image' ? 'image/*' : 'video/*'}
                    onChange={handleFileChange}
                    />
                </label>
                </div>}


            <Input text='Name' onChange={(e) => setName(e.target.value)}/>

            {(displayType === 'text' || (displayType !== 'text' && !mediaOnly)) &&
                <div className=''>
                    <div>Content</div>
                    <textarea onChange={(e) => setContent(e.target.value)} className='border w-full p-2 mt-4'></textarea>
                </div>
            }


            <button onClick={handleSubmit} className='bg-blue-500 hover:opacity-70 text-white font-bold py-2 px-8 rounded cursor-pointer'>Add it</button>

        </div>
    )
}

export default Card