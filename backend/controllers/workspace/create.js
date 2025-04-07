import User from "../../models/User.js"
import Workspace from "../../models/Workspace.js"
import zodWorkspace from "../../zod/workspace.js"

const createWorkspace = async (req,res) => {
    const { name } = req.body
    const userId = req.user.userId

    try {
        const check = zodWorkspace.safeParse(req.body)

        if(!check.success){
            return res.status(400).json({
                errors: check.error.errors.map((err) => ({
                    field: err.path[0],
                    msg: err.message
                }))
            })
        }

        const workspace = await Workspace.create({
            userId,
            name
        })

        await User.findByIdAndUpdate(userId, {
            $push: {
                workspaces: workspace._id
            }
        })

        return res.status(201).json({
            msg: 'workspace create successfully',
            workspace
        })
    }

    catch (err) {
        console.error('Create workspace error: ', err)

        return res.status(500).json({
            msg: 'Internal server error'
        })
    }
}

export default createWorkspace