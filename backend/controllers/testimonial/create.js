import Testimonial from "../../models/Testimonial.js"
import zodTestimonial from "../../zod/testimonial.js"
import User from '../../models/User.js'
import Workspace from '../../models/Workspace.js'

const createTestimonial = async (req,res) => {

    const check = zodTestimonial.safeParse(req.body)

        if(!check.success){
            return res.status(400).json({
                errors: check.error.errors.map((err) => ({
                    field: err.path[0],
                    msg: err.message
                }))
            })
        }

    const { name, content, type, rating, mediaUrl } = req.body
    const { workspaceId } = req.params
    const userId = req.user.userId

    const workspace = await Workspace.findById(workspaceId)

    if(!workspace){
        return res.status(404).json({    
            msg: "Workspace not found"
        })
    }

    if(userId === workspace.userId.toString()){
        return res.status(403).json({    
            msg: "You cannot create a testimonial for your own workspace"
        })
    }

    try {
        const testimonial = await Testimonial.create({
            userId,
            workspaceId,
            name,
            content,
            rating,
            type,
            mediaUrl,
            liked: false
        })

        const pushTestimonial = { $push: { testimonials: testimonial._id } }

        await Promise.all([
            User.findByIdAndUpdate(userId, pushTestimonial),
            Workspace.findByIdAndUpdate(workspaceId, pushTestimonial)
        ])

        return res.status(201).json({
            msg: 'Testimonial created successfully',
            testimonial
        })
    }

    catch (err) {
        console.error("Testimonial creation error: ", err)

        return res.status(500).json({ msg: "Internal server error" })
    }

}

export default createTestimonial