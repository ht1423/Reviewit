import express from 'express'
const router = express.Router()
import cloudinary from '../utils/cloudinary.js'

router.get('/', (req,res) => {
    const timestamp = Math.floor(Date.now()/1000)

    const signature = cloudinary.utils.api_sign_request({
        timestamp,
        folder: "Testimonial",
    },
        process.env.CLOUDINARY_API_SECRET
    )

    return res.json({
        signature,
        timestamp,
        apiKey: process.env.CLOUDINARY_API_KEY
    })
})

export default router