import { z } from 'zod'

const zodTestimonial = z.object({
    name: z.string().min(1, "Name cannot be empty").max(100, "Name can be at most 100 characters long"),
    type: z.enum(["text","image","video"]),
    content: z.string().max(500, "Content can be at most 500 characters long").optional(),
    rating: z.number().min(0).max(5).optional(),
    mediaUrl: z.string().optional()
}).strict().superRefine((data,ctx) => {
    if(data.type === 'text' && !data.content?.length){
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Content is required for text testimonials",
            path: ["content"]
        })
    }
    if(data.type !== 'text' && !data.mediaUrl?.length){
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Media URL is required for image and video testimonials",
            path: ["mediaUrl"]
        }) 
    }
})

export default zodTestimonial