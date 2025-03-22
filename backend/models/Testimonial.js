import mongoose from 'mongoose'

const TestimonialSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    workspaceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workspace',
    },
    type: {
        type: String,
        enum: ['text','image','video'],
        default: 'text',
        required: true
    },
    name: {
        type: String,
        maxLength: 100,
        trim: true,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0,
    },
    text: {
        type: String,
        maxLength: 1000
    },
    mediaUrl: {
        type: String,
    },
    liked: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})

export default mongoose.model('Testimonial',TestimonialSchema)

