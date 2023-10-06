import mongoose from "mongoose";


const todoSchema=new mongoose.Schema({
    task:{
        type:String,
    },
    done:{
        type:Boolean,
        default:false,
    },
    date:{
        type:Date,
        required:true,
    }
})

export default mongoose.model("todo",todoSchema);