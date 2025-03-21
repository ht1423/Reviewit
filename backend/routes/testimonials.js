import express from 'express'
import authMiddleware from '../middlewares/authMiddleware.js'
import { createTestimonial, generate, getTestimonial } from '../controllers/testimonials.js'
const router = express.Router()

router.get("/generate", authMiddleware, generate);
router.post("/:workspaceId/create", authMiddleware, createTestimonial);
router.get('/:workspaceId/get', authMiddleware, getTestimonial)

export default router