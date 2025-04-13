import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import workspaceStore from '../../store/workspaceStore';
import testimonialStore from '../../store/testimonialStore';
import axios from 'axios';
import { toast } from 'react-toastify';

import FileUpload from './FileUpload';
import TestimonialForm from './TestimonialForm';
import DisplayTypeButtons from './DisplayTypeButtons';
import StarRating from './StarRating';

function Card() {
    const [searchParams, setSearchParams] = useSearchParams();
    const workspace = workspaceStore(state => state.workspace);
    const get = workspaceStore(state => state.get);
    const { workspaceId } = useParams();
    const displayType = searchParams.get('type');
    const [rating, setRating] = useState(0);
    const [mediaOnly, setMediaOnly] = useState(false);
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState('');
    const createTestimonial = testimonialStore(state => state.createTestimonial);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchWorkspace = async () => {
            await get({ workspaceId });
        };
        fetchWorkspace();
    }, [workspaceId]);

    const handleClick = (type) => {
        setSearchParams({ type });
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) return;
        setFile(selectedFile);
    };

    const fileTypeCheck = () => {
        const imageType = ['image/png', 'image/jpeg', 'image/jpg'];
        const videoType = ['video/mp4', 'video/ogg', 'video/webm'];

        if (displayType === 'image' && !imageType.includes(file?.type)) {
            return false;
        } else if (displayType === 'video' && !videoType.includes(file?.type)) {
            return false;
        }
        return true;
    };

    const handleSubmit = async () => {
        try {
            if (!name) {
                toast.error("Name is required");
                return;
            }

            if (displayType === 'text' && !content) {
                toast.error("Content is required");
                return;
            }
            
            if (displayType !== 'text' && !mediaOnly && !content) {
                toast.error("Content is required when file is selected");
                return;
            }

            let mediaUrl = "";

            if (displayType !== 'text') {
                if (!file?.type) {
                    toast.error("Please select a file");
                    return;
                }

                const result = fileTypeCheck();

                if (!result) {
                    toast.error("Invalid file type. For image only: png, jpeg, jpg. For video only: mp4, ogg, webm");
                    return;
                }

                const signRes = await axios.get('https://reviewit-backend-6yxt.onrender.com/api/generate-signature');
                const { signature, timestamp, apiKey } = signRes.data;

                const formData = new FormData();
                formData.append("file", file);
                formData.append("signature", signature);
                formData.append("timestamp", timestamp);
                formData.append("api_key", apiKey);
                formData.append("folder", "Testimonial");

                const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dlqocjzkf/auto/upload", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });

                mediaUrl = uploadRes.data.secure_url;
            }

            const data = {
                name,
                content,
                rating,
                type: displayType,
                mediaUrl
            };

            await createTestimonial({ data, workspaceId, navigate });

        } catch (err) {
            console.log(err);
            toast.error(err.response.data.msg);
        }
    };

    return (
        <div className="flex flex-col p-6 sm:p-10 rounded-2xl w-full max-w-md lg:max-w-[480px] bg-[#1a1a1a] shadow-xl text-white space-y-8">

            <DisplayTypeButtons handleClick={handleClick} activeType={displayType}/>
   
            <div className="text-xl sm:text-[26px] font-medium text-center">Add a {displayType} testimonial to</div>
            <div className='text-center text-lg sm:text-xl'>{workspace?.name}</div>

            <div className="flex justify-center ">
                <StarRating value={rating} onChange={setRating} />
            </div>

            {displayType !== 'text' && (
                <button
                    onClick={() => setMediaOnly(prev => !prev)}
                    className={`
                        ${mediaOnly ? 'bg-gray-700 hover:opacity-70 text-white' : 'bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white'}
                        border border-gray-600 
                        font-medium 
                        w-[160px] h-[44px] cursor-pointer 
                        rounded-lg 
                        transition duration-150 
                        self-center
                    `}
                >
                    {displayType === 'image' ? 'Image Only' : 'Video Only'}
                </button>
            )}


            {displayType !== 'text' && (
                <FileUpload displayType={displayType} fileName={file?.name} handleFileChange={handleFileChange} />
            )}

            <TestimonialForm
                setName={setName}
                setContent={setContent}
                displayType={displayType}
                mediaOnly={mediaOnly}
            />

            <button onClick={handleSubmit} className="bg-indigo-700 hover:opacity-70 text-white font-bold py-2 px-8 rounded cursor-pointer">Add it</button>
        </div>
    );
}

export default Card;
