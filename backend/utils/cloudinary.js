import { v2 as cloudinary } from 'cloudinary'
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        
        console.log("Uploading file to Cloudinary:", localFilePath); 

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
            folder: "testimonial",  
        });

        console.log("File uploaded successfully:", response); 

        return response;
    } catch (e) {
        console.error("Error while uploading file on Cloudinary:", e); 
        fs.unlinkSync(localFilePath); 
        return null;
    }
};

export default uploadOnCloudinary