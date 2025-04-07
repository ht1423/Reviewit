import { z } from 'zod'

const zodWorkspace = z.object({
    name: z.string().min(1, "Workspace name cannot be empty").max(100, "Workspace name can be at most 100 characters long")
}).strict()

export default zodWorkspace