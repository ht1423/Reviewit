import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './db.js'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/user.js'
import workspaceRoutes from './routes/workspace.js'
dotenv.config()
const app = express()

connectDB()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(cookieParser())

app.use('/api/user', authRoutes)
app.use('/api/workspace', workspaceRoutes)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`))