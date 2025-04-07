import Workspace from "../../models/Workspace.js"


const getWorkspace = async (req,res) => {
    const { workspaceId } = req.params

    try {
        const workspace = await Workspace.findById(workspaceId)

        if(!workspace){
            return res.status(404).json({ msg: "Workspace not found" })
        }

        return res.json({
            workspace
        })
    }

    catch (err) {
        console.error("Get workspace error: ", err)

        return res.status(500).json({ msg: "Internal server error" })
    }
}

export default getWorkspace