import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './db.js'
import cookieParser from 'cookie-parser'
const app = express()

connectDB()

app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(cookieParser())

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`))