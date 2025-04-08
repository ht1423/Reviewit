import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 100
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 128
    },
    workspaces: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workspace'
    }],
    testimonials: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Testimonial'
    }]
},{
    timestamps: true
})

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User