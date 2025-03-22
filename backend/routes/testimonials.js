import express from 'express'
import authMiddleware from '../middlewares/authMiddleware.js'
import { createTestimonial, generate, likeTestimonial } from '../controllers/testimonials.js'
const router = express.Router()

router.get("/generate", authMiddleware, generate);
router.post("/:workspaceId/create", authMiddleware, createTestimonial);
router.post("/like", authMiddleware, likeTestimonial)

export default router