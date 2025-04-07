import { create } from 'zustand'
import axios from 'axios'
import { toast } from 'react-toastify'

const workspaceStore = create((set, get) => ({
    route: 'http://localhost:3001/api/workspace',
    workspace: null,

    create: async({ name, navigate }) => {
        const route = get().route

        try {
            const response = await axios.post(`${route}/create`, { name }, { withCredentials: true })

            set({ workspace: response.data.workspace })

            toast.success("Workspace created successfully")
            navigate(`/workspace/${response.data.workspace._id}`)
        }

        catch (err){
            handleWorkspaceError(err)
        }
    },

    get: async ({ workspaceId }) => {
        const route = get().route

        try {
            const response = await axios.get(`${route}/${workspaceId}`, { withCredentials: true })

            set({ workspace: response.data.workspace })

            return response
        }

        catch (err) {
            handleWorkspaceError(err)
        }
    }
}))

const handleWorkspaceError = (err) => {
    const errorData = err?.response?.data

    if(Array.isArray(errorData?.errors)){
        errorData.errors.forEach((error) => {
            toast.error(error.msg)
        })
    }
    else {
        toast.error(errorData?.msg)
    }
}

export default workspaceStore