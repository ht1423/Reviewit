import User from "../../models/User.js"
import jwt from 'jsonwebtoken'

const me = async (req,res) => {

    const token = req.cookies['auth-token']

    try {
        if(!token){
            return res.json({ 
                authorized: false
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(!decoded || !decoded.user || !decoded.user.userId){
            return res.json({ 
                authorized: false
            })
        }

        const user = await User.findById(decoded.user.userId).select('-password')

        if(!user){
            return res.json({ 
                authorized: false
            })
        }

        return res.json({
            authorized: true,
            user
        })
    }

    catch (err){
        console.error("Error in me route: ", err)

        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}

export default me