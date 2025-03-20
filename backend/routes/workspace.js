import express from 'express'
import { getWorkspace, createWorkspace } from '../controllers/workspace.js'
const router = express.Router()
import authMiddleware from '../middlewares/authMiddleware.js'

router.post('/create', authMiddleware, createWorkspace)
router.get('/get/:workspaceId', getWorkspace)

export default router