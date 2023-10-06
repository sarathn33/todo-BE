import todo from "../model/todoSchema.js";

//create a new todo
export const createTask=async(req,res)=>{
   
const Todo= new todo({
    task:req.body.task,
    date:new Date(req.body.date) ,
})
try {
   
    const savedTodo= await Todo.save();
    res.status(200).json({todo:savedTodo})
} catch (error) {
    res.status(400).send("Error Occureds",error)
}
}

//get all tasks

export const getTasks=async(req,res)=>{
    const Todo=await todo.find()
    try {
        res.status(200).send(Todo)
    } catch (error) {
        res.status(400).send("Error fetching tasks",error)
    }
}


//delete task

export const deleteTask =async(req,res)=>{
    const id=req.params.id;
    let Todo;
    Todo=await todo.findByIdAndRemove(id)

    try {
        res.status(200).send("Task deleted successfully")
    } catch (error) {
        res.status(400).send("Error deleting task",error)
        
    }
}

//done task
export const doneTask= async (req,res)=>{
    const id=req.params.id;
    const Todo= await todo.findById(id)
    Todo.done=!Todo.done;
    Todo.save()
    try {
        res.status(200).send(Todo)
    } catch (error) {
        res.status(404).send("Error finding done task",error)
    }
}