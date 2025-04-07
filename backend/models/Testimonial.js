import mongoose from 'mongoose'

const testimonialSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    workspaceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workspace'
    },
    name: {
        type: String,
        trim: true,
        required: true,
        minLength: 1,
        maxLength: 100
    },
    type: {
        type: String,
        enum: ["text","image","video"],
        required: true
    },
    content: {
        type: String,
        maxLength: 500,
        trim: true
    },
    liked: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})

export default mongoose.model('Testimonial', testimonialSchema)