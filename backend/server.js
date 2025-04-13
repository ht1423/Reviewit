import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './db.js'
import cookieParser from 'cookie-parser'
const app = express()
import userRoutes from './routes/user.js'
import workspaceRoutes from './routes/workspace.js'
import testimonialRoutes from './routes/testimonial.js'
import cloudinaryRoute from './routes/cloudinaryRoute.js'

connectDB()

app.use(express.json())
app.use(cors({
    origin: "https://my-reviewit.vercel.app",
    credentials: true
}))
app.use(cookieParser())

app.use('/api/user', userRoutes)
app.use('/api/workspace', workspaceRoutes)
app.use('/api/testimonial', testimonialRoutes)
app.use('/api/generate-signature', cloudinaryRoute)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`))