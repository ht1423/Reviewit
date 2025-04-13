import express from 'express'
import createTestimonial from '../controllers/testimonial/create.js'
import authMiddleware from '../middleware/authMiddleware.js'
import likeUpdate from '../controllers/testimonial/likeUpdate.js'
const router = express.Router()

router.post('/:workspaceId/create', createTestimonial)
router.put('/like/:testimonialId', authMiddleware, likeUpdate)

export default router