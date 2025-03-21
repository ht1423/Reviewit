import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const authMiddleware = (req,res,next) => {
    const token = req.cookies['auth-token']

    try {

        if(!token){
            return res.status(401).json({
                msg: 'Unauthorized'
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(!decoded || !decoded.user || !decoded.user.userId){
            return res.status(401).json({
                msg: 'Unauthorized'
            })
        }

        req.user = decoded.user
        next()
    }

    catch (e) {
        console.error('Error in authMiddleware', e)
    
        if (e.name === 'JsonWebTokenError' || e.name === 'TokenExpiredError') {
            return res.status(401).json({ msg: 'Unauthorized' });
        }
    
        return res.status(500).json({ msg: 'Internal server error' });
    }
    
}

export default authMiddleware