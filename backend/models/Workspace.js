import mongoose from 'mongoose'

const workspaceSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
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
    timestamps: true,
})

workspaceSchema.set('toJSON',{
    transform: (_,ret) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
    }
})


const Workspace = mongoose.models.Workspace || mongoose.model('Workspace', workspaceSchema)

export default Workspace