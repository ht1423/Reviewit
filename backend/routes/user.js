import express from 'express'
import signup from '../controllers/user/signup.js'
import signin from '../controllers/user/signin.js'
import me from '../controllers/user/me.js'
import logout from '../controllers/user/logout.js'
import authMiddleware from '../middleware/authMiddleware.js'
const router = express.Router()

router.post('/signup', signup)
router.post('/signin', signin)
router.get('/me', me)
router.post('/logout',authMiddleware, logout)

export default router