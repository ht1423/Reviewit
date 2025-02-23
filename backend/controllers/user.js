import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import { zodSignin, zodSignup } from '../zod.js'
import User from '../models/User.js'
dotenv.config()

const signup = async (req,res) => {

    const { name, email, password } = req.body

    try {
        const check = zodSignup.safeParse(req.body)

        if(!check.success){
            return res.status(400).json({
                error: check.error.format()
            })
        }

        const existingUser = await User.findOne({ email })

        if(existingUser){
            return res.status(409).json({
                msg: '🚨 User already exists! Try signing in instead. 🔑'
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

        const token = jwt.sign(payload,process.env.JWT_SECRET)

        res.cookie('auth-token', token, {
            httpOnly: true,
        })

        return res.status(201).json({
            msg: 'User created successfully',
            newUser,
        })
    }

    catch (err) {
        console.error('Signup error',err.message)

        return res.status(500).json({
            msg: 'Server Error. Please try again later'
        })
    }
    
}



const signin = async (req,res) => {

    const { email, password } = req.body

    try {
        const check = zodSignin.safeParse(req.body)

        if(!check.success){
            return res.status(400).json({
                error: check.error.format()
            })
        }

        const existingUser = await User.findOne({ email })

        if(!existingUser){
            return res.status(404).json({
                msg: '🤷‍♂️ User not found! Create an account to get started. 📝'
            })
        }

        const match = await bcrypt.compare(password, existingUser.password)

        if(!match){
            return res.status(401).json({
                msg: '❌ Oops! Incorrect password. Try again. 🔐'
            })
        }

        const payload = {
            user: {
                userId: existingUser._id
            }
        }

        const token = jwt.sign(payload,process.env.JWT_SECRET)

        res.cookie('auth-token', token, {
            httpOnly: true,
        })

        return res.json({
            msg: 'Sign in successful',
            existingUser,
        })
    }

    catch (err) {
        console.error('Signin error',err.message)

        return res.status(500).json({
            msg: 'Server Error. Please try again later'
        })
    }
    
}

const signout = async (req,res) => {

    try {
        res.clearCookie('auth-token',{
            httpOnly: true,
        })
        return res.json({
            msg: '👋 Signed out successfully! See you next time. 🚀'
        })
    }

    catch (err) {
        console.error(err.message)
        return res.status(500).json({
            msg: 'Server Error. Please try again later'
        })
    }
}


export {
    signup,
    signin,
    signout
}


