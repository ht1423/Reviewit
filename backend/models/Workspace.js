import mongoose from 'mongoose'

const WorkspaceSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    name: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 100,
        trim: true
    },
    description: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 1000,
        trim: true
    },
    testimonials: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Testimonial',
    }],
    wallOfLove: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Testimonial',
    }]
},{
    timestamps: true
})

export default mongoose.model('Workspace',WorkspaceSchema)