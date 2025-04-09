import mongoose from 'mongoose'

const testimonialSchema = new mongoose.Schema({
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
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    mediaUrl: {
        type: String,
        trim: true
    },
    liked: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})

testimonialSchema.set('toJSON', { 
    transform: (_, ret) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
    }
})

const Testimonial = mongoose.models.Testimonial || mongoose.model('Testimonial', testimonialSchema)

export default Testimonial