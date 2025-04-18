import User from '../../models/User.js'
import { zodSignup } from '../../zod/user.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const signup = async (req,res) => {

    const check = zodSignup.safeParse(req.body);

        if(!check.success){
            return res.status(400).json({
                errors: check.error.errors.map((err) => ({
                    field: err.path[0],
                    msg: err.message
                }))
            })
        }
        
    const { name, email, password } = req.body

    try {
        const existingUser = await User.findOne({ email })

        if(existingUser){
            return res.status(409).json({
                msg: "Email already in use. Please sign in"
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        })

        const payload = {
            user: {
                userId: newUser._id
            }
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' })

        res.cookie('auth-token', token, {
            httpOnly: true,
            sameSite: 'none',
            maxAge: 1000 * 60 * 60 * 24 * 7,
            secure: true
        })

        const user = await User.findById(newUser._id).select('-password')

        return res.status(201).json({
            msg: 'User created successfully',
            user
        })
    }
    catch (err){
        console.error("Error signing up user: ", err)

        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}

export default signup