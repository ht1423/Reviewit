import React, { useEffect, useState } from 'react'
import InputBox from '../Signup/InputBox'
import useAuthStore from '../../store/authStore'
import StarRating from './StarRating'
import { useNavigate, useParams } from 'react-router-dom'
import FormType from './FormType'
import ToggleButton from './ToggleButton'
import ChooseFile from './ChooseFile'
import axios from 'axios'
import { toast } from 'react-toastify'
function TestimonialForm({formType,setFormType}) {

    const { workspace, get, addTestimonial } = useAuthStore()
    const { workspaceId } = useParams()

    const [rating, setRating] = useState(0)
    const [imageOnly, setImageOnly] = useState(false)
    const [videoOnly, setVideoOnly] = useState(false)
    const [name, setName] = useState("")
    const [text, setText] = useState("")
    const [file, setFile] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        if(!workspace || workspace?._id !== workspaceId){
            get(workspaceId)

        }
    },[workspaceId,get,workspace])

    useEffect(() => {
        setFile(null)
    },[formType])

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0] 
        if(!selectedFile){
            return 
        }

        const allowedImageTypes = ["image/jpg", "image/png", "image/webp"];
        const allowedVideoTypes = ["video/mp4", "video/mov", "video/avi"];

        if(formType === 'image' && !allowedImageTypes.includes(selectedFile.type)) {
            toast.error("Please upload a valid image file (.jpg, .png, .webp).");
            setFile(null)
            return
        }

        if(formType === 'video' && !allowedVideoTypes.includes(selectedFile.type)) {
            toast.error("Please upload a valid video file (.mp4, .mov, .avi).");
            setFile(null)
            return
        }

        setFile(selectedFile)

    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {

            let uploadedUrl = ""
        
             if(file) {

                const { data } = await axios.get('http://localhost:3001/api/testimonial/generate', { withCredentials: true })

                if(!data.signature || !data.timestamp || !data.api_key || !data.cloud_name) return

                const cloudinaryFormData = new FormData()

                cloudinaryFormData.append("file", file)
                cloudinaryFormData.append("api_key", data.api_key)
                cloudinaryFormData.append("timestamp", data.timestamp)
                cloudinaryFormData.append("signature", data.signature)
                cloudinaryFormData.append("folder", "testimonials")

                const response = await axios.post(`https://api.cloudinary.com/v1_1/${data.cloud_name}/upload`, cloudinaryFormData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })

                if(!response.data.secure_url){
                    toast.error('cloudinary upload failed')
                }

                uploadedUrl = response.data.secure_url

            }

            const requestBody = {
                name,
                rating,
                text,
                mediaUrl: uploadedUrl,
                type: formType
            }

            await addTestimonial(requestBody, navigate, workspaceId, formType )

        }

        catch (error){
            console.error(error)
            toast.error("Something went wrong")
        }
    }

  return (
    <div className=' bg-white/80 backdrop-blur-md shadow-[0_0_20px_rgba(10,10,10,0.1)] rounded-lg px-10 lg:px-12 py-6 w-[27em] md:w-[28em] xl:w-[32em] shrink-0'>

        <FormType formType={formType} setFormType={setFormType}/>


        <form onSubmit={handleSubmit} className='flex flex-col'>

            <h1 className='text-[22px] text-[rgb(46,49,59)] tracking-tight whitespace-nowrap font-semibold text-center mb-4'>{formType === 'text' ? 'Add a text testimonial to' : formType === 'image' ? 'Add an image testimonial to' : 'Add a video testimonial to'}</h1>


            <div className='flex justify-center'>
                <h3 className='truncate text-center max-w-[20em]  text-gray-600 font-medium'>{workspace?.name}</h3>
            </div>

            <div className='mt-4'>
                <StarRating rating={rating} setRating={setRating}/>
            </div>

            {formType === 'image' && <ToggleButton media={imageOnly} set={setImageOnly} formType={formType}/>}

            {formType === 'video' && <ToggleButton media={videoOnly} set={setVideoOnly} formType={formType}/>}

            {(formType === 'image' || formType === 'video') && <ChooseFile formType={formType} onFileChange={handleFileChange}/>}

            <div className='mt-6'>
                <InputBox text='Name' type='text' onChange={(e) => setName(e.target.value)}/>
            </div>

            {(formType === 'text' || 
                (formType === 'image' && !imageOnly) || 
                (formType === 'video' && !videoOnly)) && (
                    <div>
                        <h4 className='font-medium text-[16px] mb-2 text-[rgb(46,49,59)]'>Write your testimonial...</h4>
                        <textarea 
                            onChange={(e) => setText(e.target.value)}
                            className={`scrollbar-hide ${
                                formType === 'text' ? 'h-44' : 'h-16'
                            } w-full bg-transparent border-[1px] border-gray-300 rounded-lg outline-none px-4 py-2 focus:shadow-[0_0_2px_3px_rgba(177,173,255,0.4)] transform transition ease-in-out duration-300`}
                        ></textarea>
                    </div>
                )}


            <button type='submit' className='bg-[rgb(170,165,255)] font-medium mt-8 mb-4 text-white h-12 rounded-lg hover:opacity-70'>Add it</button>

        </form>
        </div>
    )
    
    }

    export default TestimonialForm