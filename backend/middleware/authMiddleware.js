import User from "../models/User.js"
import jwt from 'jsonwebtoken'
const authMiddleware = async (req,res,next) => {

    const token = req.cookies['auth-token']

    try {
        if(!token){
            return res.status(401).json({ 
               msg: "Unauthorized 1" 
            })
        }
        console.log("done")


        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(!decoded || !decoded.user || !decoded.user.userId){
            return res.status(401).json({ 
                msg: "Unauthorized 2" 
             })
        }

        const user = await User.findById(decoded.user.userId)

        if(!user){
            return res.status(401).json({ 
               msg: "Unauthorized 3" 
            })
        }

        req.user = decoded.user
        next()
    }

    catch (err){
        console.error("Error in authMiddleware: ", err)

        return res.status(500).json({
            msg: "Internal server error"
        })
    }
}

export default authMiddleware