import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { createTaskRoute, deleteTaskRoute, doneTaskRoute, getTaskRoute } from "./routes/routes.js";


const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

//Database connection

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true})
.then(()=>console.log("Database connection established"))
.catch((error)=>console.log("Error connecting",error))


//
app.get("/",(req,res)=>{
    res.status(200).send("Welcome To ToDo App")
})

//setting routes
app.use("/task",createTaskRoute)
app.use("/task",getTaskRoute)
app.use("/task",deleteTaskRoute)
app.use("/task",doneTaskRoute)


//port connection
app.listen(process.env.PORT,()=>console.log("Server started at the port ",process.env.PORT))