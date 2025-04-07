import { z } from 'zod'

const zodTestimonial = z.object({
    name: z.string().min(1, "Name cannot be empty").max(100, "Name can be at most 100 characters long"),
    type: z.enum(["text","image","video"]),
    content: z.string().max(500, "Content can be at most 500 characters long").optional()
}).refine(
    (data) => {
        if(data.type === 'text'){
            return data?.content?.length > 0
        }
        return true
    },{
        message: "Content is required for text testimonials",
        path: ["content"]
    }
)

export default zodTestimonial
