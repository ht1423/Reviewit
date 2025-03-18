import express from 'express'
import { logout, me, signin, signup } from '../controllers/user.js'
const router = express.Router()

router.post('/signup', signup)
router.post('/signin', signin)
router.post('/logout', logout)
router.get('/me', me)

export default router