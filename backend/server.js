import express from 'express'
const app = express()
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import connectDB from './db.js'
import authRoutes from './routes/user.js'
dotenv.config()

connectDB()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true, 
}))
app.use(cookieParser())

app.use('/api/auth', authRoutes)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`))