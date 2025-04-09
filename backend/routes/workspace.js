import express from 'express'
import createWorkspace from '../controllers/workspace/create.js'
import authMiddleware from '../middleware/authMiddleware.js'
import getWorkspace from '../controllers/workspace/workspace.js'
import embedCode from '../controllers/workspace/embedCode.js'
const router = express.Router()

router.post('/create', authMiddleware,createWorkspace)
router.get('/:workspaceId/embed-code', embedCode)
router.get('/:workspaceId', getWorkspace)

export default router