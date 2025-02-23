import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const authMiddleware = (req,res,next) => {

    const token = req.cookies['auth-token']

    try {
        if(!token){
            return res.status(401).json({
                msg: 'Unauthorized. Token not found.'
            })
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        if(!decoded || !decoded.user || !decoded.user.userId){
            return res.status(401).json({
                msg: 'Unauthorized'
            })
        }

        res.user = decoded.user
        next()
    }

    catch (err) {
        console.error('Authmiddleware Error', err.message)

        return res.status(500).json({
            msg: 'Server Error. Please try again later'
        })
    }
}

export default authMiddleware