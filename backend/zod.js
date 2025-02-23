import { z } from 'zod'

const zodSignin = z.object({
    email: z.string().email('Invalid email format'),
    password: z.string().min(8,'Password must be at least 8 characters long').max(128, 'Password must be at most 128 characters long')
}).strict()

const zodSignup = zodSignin.extend({
    name: z.string().min(1,'Name must be at least 1 character long').max(100, 'Name must be at most 100 characters long')
}).strict()

export {
    zodSignin,
    zodSignup
}