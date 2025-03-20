import express from 'express'
import authMiddleware from '../middlewares/authMiddleware.js'
import { createTestimonial } from '../controllers/testimonials.js'
import { upload } from '../middlewares/multerMiddleware.js'
const router = express.Router()

router.post("/:workspaceId/create", authMiddleware ,upload.single('file'), createTestimonial);
router.get('/:workspaceId/get', authMiddleware, createTestimonial)

export default router