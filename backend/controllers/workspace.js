import User from "../models/User.js"
import Workspace from "../models/Workspace.js"
import workspaceSchema from "../zod/workspaceSchema.js"

const createWorkspace = async (req,res) => {
    const { name, description } = req.body
    const userId = req.user.userId

    try {
        const check = workspaceSchema.safeParse(req.body)
        if(!check.success){
            return res.status(400).json({
                errors: check.error.errors.map((err) => ({
                    field: err.path[0],
                    message: err.message
                }))
            })
        }       

        const workspace = await Workspace.create({
            userId,
            name,
            description
        })

        const workspaceId = workspace._id

        await User.findByIdAndUpdate(userId, {
            $push: {
                workspaces: workspaceId
            }
        })


        return res.status(201).json({
            msg: 'Workspace created successfully',
            workspace
        })
    }
    catch (e){
        console.error('Error while creating workspace', e)

        return res.status(500).json({
            msg: 'Internal server error'
        })
    }
}

const getWorkspace = async (req,res) => {
    const { workspaceId } = req.params

    try {
        const workspace = await Workspace.findById(workspaceId)
        if(!workspace){
            return res.status(404).json({
                msg: 'Workspace not found'
            })
        }

        return res.json(workspace)
    }
    catch (e){
        console.error('Error while getting workspace', e)

        return res.status(500).json({
            msg: 'Internal server error'
        })
    }
} 

export {
    createWorkspace,
    getWorkspace
}