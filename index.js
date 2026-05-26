import express from "express"
import { connectDb } from "./config/db.js"
import { config } from "dotenv"
config()
const app = express()

const PORT = process.env.PORT
app.use(express.json())

app.listen(PORT,()=>{
    console.log("Server is runnig on port no",PORT);
    
})