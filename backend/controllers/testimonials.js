import Testimonial from "../models/Testimonial.js"
import User from "../models/User.js"
import Workspace from "../models/Workspace.js"
import generateSignature from "../utils/cloudinary.js"
import testimonialSchema from '../zod/testimonialSchema.js'

const generate = async (req,res) => {
    const { signature, timestamp, api_key, cloud_name } = generateSignature()

    if(!signature || !timestamp || !api_key){
        return res.status(500).json({
            msg: 'Error while generating signature'
        })
    }

    return res.json({
        signature,
        timestamp,
        api_key,
        cloud_name
    })
}
const createTestimonial = async (req,res) => {
    const { text, mediaUrl, name, type, rating } = req.body
    const userId = req.user.userId
    const workspaceId = req.params.workspaceId

    try {
        const check = testimonialSchema.safeParse(req.body)
        if(!check.success){
            return res.status(400).json({
                errors: check.error.errors.map((err) => ({
                    field: err.path[0],
                    message: err.message
                }))
            })
        }

        const newTestimonial = await Testimonial.create({
            userId,
            workspaceId,
            type,
            name,
            text,
            rating,
            mediaUrl,
            liked: false
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
            newTestimonial,
        })
    }
    catch (e){
        console.error('Error while creating testimonial', e)

        return res.status(500).json({
            msg: 'Internal server error'
        })
    }
}

const likeTestimonial = async (req,res) => {
    const { testimonialId, liked, workspaceId } = req.body

    try {
        const testimonial = await Testimonial.findById(testimonialId)

        if(!testimonial){
            return res.status(400).json({
                msg: "No Testimonial found"
            })
        }

        const workspace = await Workspace.findById(workspaceId)

        if(!workspace){
            return res.status(400).json({
                msg: "No Workspace found"
            })
        }

        if(testimonial.liked !== liked){
            await Testimonial.findByIdAndUpdate(testimonialId, {
                liked
            })
        }

        if(liked){
            await Workspace.findByIdAndUpdate(workspaceId, {
                $addToSet: {
                    wallOfLove: testimonialId
                }
            })
        }
        else{
            await Workspace.findByIdAndUpdate(workspaceId, {
                $pull: {
                    wallOfLove: testimonialId
                }
            })
        }

        return res.status(200).json({
            msg: 'Done',
            liked
        })
    }
    catch (error){
        console.error('Error while liking testimonial', error)

        return res.status(500).json({
            msg: 'Internal server error'
        })
    }
}


export {
    createTestimonial,
    generate,
    likeTestimonial
}