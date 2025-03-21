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

const getTestimonial = async (req,res) => {
    const { type } = req.query
    const workspaceId = req.params.workspaceId

    try {
        const workspace = await Workspace.findById(workspaceId).populate({
            path: 'testimonials',
            options: {
                sort: {
                    createdAt: -1
                }
            },
            select: 'name text mediaUrl rating wallOfLove type'
        })

        if(!workspace || workspace.testimonials.length === 0){
            return res.status(404).json({
                msg: 'No testimonials found'
            })
        }

        let testimonials = workspace.testimonials

        if(type && ['text','image','video'].includes(type)){
            testimonials = testimonials.filter((t) => t.type === type)
        }

        return res.json({
            msg: 'Testimonials fetched successfully',
            testimonials,
          });
          
        
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
    getTestimonial,
    generate
}