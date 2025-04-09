import Workspace from '../../models/Workspace.js'

const embedCode = async (req,res) => {
    const { workspaceId } = req.params

    try {
        const workspace = await Workspace.findById(workspaceId).populate('testimonials')

        if(!workspace){
            return res.status(404).json({
                msg: 'Workspace not found'
            })
        }

        const likedTestimonials = workspace.testimonials.filter(t => t.liked)

        return res.json({
            likedTestimonials
        })
    }

    catch (err){
        console.error("Embed code error: ", err)

        return res.status(500).json({ msg: "Internal server error" })
    }
} 

export default embedCode