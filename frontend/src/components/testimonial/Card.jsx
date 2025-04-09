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
    const [fileName, setFileName] = useState('');
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [fileType, setFileType] = useState('');
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
        const file = e.target.files[0];
        if (!file) return;
        setFileName(file);
        setFileType(file.type);
    };

    const fileTypeCheck = () => {
        const imageType = ['image/png', 'image/jpeg', 'image/jpg'];
        const videoType = ['video/mp4', 'video/ogg', 'video/webm'];

        if (displayType === 'image' && !imageType.includes(fileType)) {
            return false;
        } else if (displayType === 'video' && !videoType.includes(fileType)) {
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

            let mediaUrl = "";

            if (displayType !== 'text') {
                if (!fileType) {
                    toast.error("Please select a file");
                    return;
                }

                const result = fileTypeCheck();

                if (!result) {
                    toast.error("Invalid file type. For image only: png, jpeg, jpg. For video only: mp4, ogg, webm");
                    return;
                }

                const signRes = await axios.get('http://localhost:3001/api/generate-signature');
                const { signature, timestamp, apiKey } = signRes.data;

                const formData = new FormData();
                formData.append("file", fileName);
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
        <div className="border p-10 text-center space-y-8">
            <DisplayTypeButtons handleClick={handleClick} />
   
            <div className="text-2xl font-medium">Add a {displayType} testimonial to</div>
            <div>{workspace?.name}</div>

            <div className="flex justify-center mb-8">
                <StarRating value={rating} onChange={setRating} />
            </div>

            {displayType !== 'text' && (
                <button
                    onClick={() => setMediaOnly(prev => !prev)}
                    className={`${mediaOnly ? 'bg-blue-500' : 'bg-gray-500'} hover:opacity-70 text-white font-bold py-2 px-8 rounded cursor-pointer`}
                >
                    {displayType === 'image' ? 'image only' : 'Video only'}
                </button>
            )}

            {displayType !== 'text' && (
                <FileUpload displayType={displayType} handleFileChange={handleFileChange} />
            )}

            <TestimonialForm
                setName={setName}
                setContent={setContent}
                displayType={displayType}
                mediaOnly={mediaOnly}
            />

            <button onClick={handleSubmit} className="bg-blue-500 hover:opacity-70 text-white font-bold py-2 px-8 rounded cursor-pointer">Add it</button>
        </div>
    );
}

export default Card;
