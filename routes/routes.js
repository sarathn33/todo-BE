import { Router } from "express";
import { createTask, deleteTask, doneTask, getTasks } from "../controllers/controller.js";

export const createTaskRoute=Router().post("/",createTask);
export const getTaskRoute=Router().get("/",getTasks);
export const deleteTaskRoute=Router().delete("/:id",deleteTask);
export const doneTaskRoute=Router().get("/:id",doneTask);