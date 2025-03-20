import mongoose from 'mongoose'

const TestimonialSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    workspaceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workspace',
        required: true
    },
    type: {
        type: String,
        enum: ['text','image','video'],
        default: 'text',
        required: true
    },
    text: {
        type: String,
        maxLength: 1000
    },
    mediaUrl: {
        type: String,
    },
    WallOfLove: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})

export default mongoose.model('Testimonial',TestimonialSchema)

