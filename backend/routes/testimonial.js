import express from 'express'
import createTestimonial from '../controllers/testimonial/create.js'
import getTestimonial from '../controllers/testimonial/getTestimonial.js'
import authMiddleware from '../middleware/authMiddleware.js'
const router = express.Router()

router.post('/:workspaceId', authMiddleware, createTestimonial)
router.get('/:workspaceId', getTestimonial)

export default router