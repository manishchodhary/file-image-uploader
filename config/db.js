import mongoose from "mongoose";
import { config } from "dotenv";

config()

export const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database is connected");
        
    } catch (error) {
        console.log("error in Database conncetion",error);
        process.exit(1);
    }
}