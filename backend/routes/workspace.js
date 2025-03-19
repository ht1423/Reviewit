import express from 'express'
import { getWorkspace, createWorkspace } from '../controllers/workspace.js'
import authMiddleware from '../authMiddleware.js'
const router = express.Router()

router.post('/create', authMiddleware, createWorkspace)
router.get('/get/:workspaceId', getWorkspace)

export default router