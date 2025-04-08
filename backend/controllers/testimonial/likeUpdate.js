import Testimonial from "../../models/Testimonial.js"

const likeUpdate = async (req,res) => {
    const { testimonialId } = req.params

    try {
        const testimonial = await Testimonial.findById(testimonialId)

        if(!testimonial){
            return res.status(404).json({msg: "Testimonial not found"})
        }

        testimonial.liked = !testimonial.liked

        await testimonial.save()

        return res.json({
            msg: "Like updated successfully",
            liked: testimonial.liked
        })
    }

    catch (err) {
        console.error("Like update error: ", err)

        return res.status(500).json({ msg: "Internal server error" })
    }
}

export default likeUpdate