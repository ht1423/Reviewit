import Testimonial from "../../models/Testimonial.js"
import zodTestimonial from "../../zod/testimonial.js"
import User from '../../models/User.js'
import Workspace from '../../models/Workspace.js'

const createTestimonial = async (req,res) => {
    const { name, content, type, rating, mediaUrl } = req.body
    const { workspaceId } = req.params
    const userId = req.user.userId

    try {
        const check = zodTestimonial.safeParse(req.body)

        if(!check.success){
            return res.status(400).json({
                errors: check.error.errors.map((err) => ({
                    field: err.path[0],
                    msg: err.message
                }))
            })
        }

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

        await User.findByIdAndUpdate(userId, {
            $push: {
                testimonials: testimonial._id
            }
        })

        await Workspace.findByIdAndUpdate(workspaceId, {
            $push: {
                testimonials: testimonial._id
            }
        })

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