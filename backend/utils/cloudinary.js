import cloudinary from "./cloudinaryConfig.js";

 const generateSignature = (req, res) => {
    const timestamp = Math.floor(Date.now() / 1000);

    const signature = cloudinary.utils.api_sign_request(
      { timestamp, folder: "testimonials" },
      process.env.CLOUDINARY_API_SECRET
    );
  
    return { 
      signature, 
      timestamp, 
      api_key: process.env.CLOUDINARY_API_KEY, 
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME 
    }
  };

  export default generateSignature