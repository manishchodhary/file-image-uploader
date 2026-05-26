import { Router } from "express";
import { sendEmail } from "../services/opt.service.js";
const router = Router()

router.post("register",async(req,res)=>{
try {
    const {name,eamil,password} = req.body;
    
} catch (error) {
    
}
})