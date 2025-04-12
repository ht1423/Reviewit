import { z } from 'zod'

const zodSignin = z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(8, "Password cannot be empty").max(128, "Password can be at most 128 characters long")
}).strict()

const zodSignup = zodSignin.extend({
    name: z.string().min(1, "Name cannot be empty").max(100, "Name can be at most 100 characters long")
}).strict()

export {
    zodSignin,
    zodSignup
}