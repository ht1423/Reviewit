import express from 'express'
import createWorkspace from '../controllers/workspace/create.js'
import authMiddleware from '../middleware/authMiddleware.js'
import getWorkspace from '../controllers/workspace/workspace.js'
const router = express.Router()

router.post('/create', authMiddleware,createWorkspace)
router.get('/:workspaceId', getWorkspace)

export default router