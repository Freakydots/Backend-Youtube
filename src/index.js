// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()















//Another approach to connect database (no. 7)
// import express from "express";
// const app=express()
// ( async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("errror",(error)=>{
//             console.log("ERRR: ",error);
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`app is listening to port ${process.env.PORT}`);
//         })

//     }catch(error){
//         console.error("ERROR: ",error)
//         throw err
//     }
// })()