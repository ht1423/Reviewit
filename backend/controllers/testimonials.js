import Testimonial from "../models/Testimonial.js"
import User from "../models/User.js"
import Workspace from "../models/Workspace.js"
import uploadOnCloudinary from "../utils/cloudinary.js"
import { testimonialSchema } from "../zod.js"
import fs from 'fs'

const createTestimonial = async (req,res) => {
    const { text } = req.body
    let mediaUrl = null
    const userId = req.user.userId
    const workspaceId = req.params.workspaceId
    const type = req.query.type

    try {
        if(text){ 
            const check = testimonialSchema.safeParse(req.body)
            if(!check.success){
                return res.status(400).json({
                    errors: check.error.errors.map((err) => ({
                        field: err.path[0],
                        message: err.message
                    }))
                })
            }
        }


        if(req.file){
            console.log("File received", req.file.path)

            const cloudinaryResponse = await uploadOnCloudinary(req.file.path)

            if(!cloudinaryResponse){
                return res.status(500).json({
                    msg: 'Error while uploading file on Cloudinary'
                })
            }

            mediaUrl = cloudinaryResponse.secure_url

            fs.unlinkSync(req.file.path)
        }

        if(!text && !mediaUrl){
            return res.status(400).json({
                msg: 'Text or media is required'
            })
        }

        const newTestimonial = await Testimonial.create({
            userId,
            workspaceId,
            type,
            text,
            mediaUrl,
            wallOfLove: false
        })

        await User.findByIdAndUpdate(userId, {
            $push: {
                testimonials: newTestimonial._id
            }
        })

        await Workspace.findByIdAndUpdate(workspaceId, {
            $push: {
                testimonials: newTestimonial._id
            }
        })

        return res.status(201).json({
            msg: 'Testimonial created successfully',
            newTestimonial
        })
    }
    catch (e){
        console.error('Error while creating testimonial', e)

        return res.status(500).json({
            msg: 'Internal server error'
        })
    }
}

const getTeestimonial = async (req,res) => {
    const { type } = req.query
    const workspaceId = req.params.workspaceId

    try {
        const workspace = await Workspace.findbyId(workspaceId).populate('testimonials')

        if(!workspace || workspace.testimonials.length === 0){
            return res.status(404).json({
                msg: 'No testimonials found'
            })
        }

        let testimonials = workspace.testimonials

        if(type && ['text','image','video'].includes(type)){
            testimonials = testimonials.filter((t) => t.type === type)
        }

        return res.json(testimonials)
        
    }

    catch (e){
        console.error('Error while getting testimonial', e)

        return res.status(500).json({
            msg: 'Internal server error'
        })
    }
}

export {
    createTestimonial,
    getTeestimonial
}