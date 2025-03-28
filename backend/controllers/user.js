import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
dotenv.config()
import { signinSchema, signupSchema } from '../zod/authSchema.js'
import User from '../models/User.js'

const signup = async (req,res) => {
    const { name, email, password } = req.body

    try {
        const check = signupSchema.safeParse(req.body)
        if(!check.success){
            return res.status(400).json({
                errors: check.error.errors.map((err) => ({
                    field: err.path[0],
                    message: err.message
                }))
            })
        }

        const existingUser = await User.findOne({ email })
        if(existingUser){
            return res.status(409).json({
                msg: 'User already exists. Please sign in instead'
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = await User.create({
            name, 
            email,
            password: hashedPassword
        })

        const payload = {
            user: {
                userId: newUser._id,
                name: newUser.name
            }
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' })

        res.cookie('auth-token', token, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000, 
            sameSite: 'lax', 
            secure: process.env.NODE_ENV === 'production' 
        })

        const user = await User.findById(newUser._id).select('-password')

        return res.status(201).json({
            msg: 'Signup successful',
            user
        })
    }
    catch (e){
        console.error('Error while Signup', e)

        return res.status(500).json({
            msg: 'Internal Server error. Please try again later'
        })
    }
}

const signin = async (req,res) => {
    const { email, password } = req.body

    try {
        const check = signinSchema.safeParse(req.body)
        if(!check.success){
            return res.status(400).json({
                errors: check.error.errors.map((err) => ({
                    field: err.path[0],
                    message: err.message
                }))
            })
        }

        const existingUser = await User.findOne({ email })
        if(!existingUser){
            return res.status(404).json({
                msg: 'User not found. Please Sign up'
            })
        }

        const isMatch = await bcrypt.compare(password, existingUser.password)
        if(!isMatch){
            return res.status(401).json({
                msg: 'Invalid password'
            })
        }


        const payload = {
            user: {
                userId: existingUser._id,
                name: existingUser.name
            }
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' })

        res.cookie('auth-token', token, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000, 
            sameSite: 'lax', 
            secure: process.env.NODE_ENV === 'production' 
        })

        const user = await User.findById(existingUser._id).select('-password')

        return res.json({
            msg: 'Signin successful',
            user
        })
    }
    catch (e){
        console.error('Error while Signin', e)

        return res.status(500).json({
            msg: 'Internal Server error. Please try again later'
        })
    }
}

const logout = (req,res) => {
    try {
        res.clearCookie('auth-token', {
            httpOnly: true,
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production'
          })
          
        return res.json({
            msg: 'Logout successful'
        })
    }
    catch (e){
        console.error('Error while logout', e)
        return res.status(500).json({
            msg: 'Internal server error'
        })
    }
}

const me = (req,res) => {
    const token = req.cookies['auth-token']

    try {

        if(!token){
            return res.status(401).json({
                isAuthenticated: false
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(!decoded || !decoded.user || !decoded.user.userId){
            return res.json({
                isAuthenticated: false
            })
        }
        
        return res.json({
            isAuthenticated: true,
            user: decoded.user
        })
    }
    catch (e){
        console.error('Error while checking authentication', e)

        return res.json({
            isAuthenticated: false
        })
    }
}

export {
    signup,
    signin,
    logout,
    me
}