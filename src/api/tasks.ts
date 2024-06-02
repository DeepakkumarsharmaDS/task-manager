// src/api/tasks.ts
import express from "express";
import { createTask, getTasks } from "../services/taskService";

const router = express.Router();

router.post("/users/:userId/tasks", (req, res) => {
  const { userId } = req.params;
  const { title, description, dueDate, status } = req.body;
  const task = createTask(userId, title, description, new Date(dueDate), status);
  res.json(task);
});

router.get("/users/:userId/tasks", (req, res) => {
  const { userId } = req.params;
  const userTasks = getTasks(userId);
  res.json(userTasks);
});

// Implement other endpoints: getTask, updateTask, deleteTask

export default router;
