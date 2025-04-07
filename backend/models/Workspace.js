import mongoose from 'mongoose'

const workspaceSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 100
    },
    testimonials: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Testimonial'
    }],  
},{
    timestamps: true
})

export default mongoose.model('Workspace', workspaceSchema)