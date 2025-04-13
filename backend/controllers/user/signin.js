import User from '../../models/User.js'
import jwt from 'jsonwebtoken'
import { zodSignin } from '../../zod/user.js'
import bcrypt from 'bcryptjs'

const signin = async (req,res) => {

    const check = zodSignin.safeParse(req.body)

        if(!check.success){
            return res.status(400).json({
                errors: check.error.errors.map((err) => ({
                    field: err.path[0],
                    msg: err.message
                }))
            })
        }

    const { email, password } = req.body

    try {
        const existingUser = await User.findOne({ email })

        if(!existingUser){
            return res.status(404).json({
                msg: "Email not found. Please sign up"
            })
        }

        const match = await bcrypt.compare(password, existingUser.password)

        if(!match){
            return res.status(401).json({
                msg: "Incorrect password"
            })
        }

        const payload = {
            user: {
                userId: existingUser._id
            }
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' })

        res.cookie('auth-token', token, {
            httpOnly: true,
            sameSite: 'none',
            maxAge: 1000 * 60 * 60 * 24 * 7,
            secure: true
        })
        
        const user = await User.findById(existingUser._id).select('-password')

        return res.json({
            msg: 'User signed in successfully',
            user,
        })
    }
    catch (err){
        console.error("Error signing in user: ", err)

        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}

export default signin