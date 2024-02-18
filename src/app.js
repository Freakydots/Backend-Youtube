import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))//form
app.use(express.urlencoded({extended:true,limit:"16kb"}))//url
app.use(express.static("public"))//image
app.use(cookieParser())//user ki browser cookies pr crud operations 


import userRouter from './routes/user.routes.js'

app.use("/api/v1/users",userRouter)

export {app}