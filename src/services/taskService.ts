// src/services/taskService.ts
import { Task } from "../model/task";
import { tasks } from "./inMemoryDb";
import { nanoid } from 'nanoid';

export const createTask = (userId: string, title: string, description: string, dueDate: Date, status: "To Do" | "In Progress" | "Done"): Task => {
  const task: Task = { id: nanoid(), title, description, dueDate, status, userId };
  const userTasks = tasks.get(userId) || [];
  userTasks.push(task);
  tasks.set(userId, userTasks);
  return task;
};

export const getTasks = (userId: string): Task[] => {
  return tasks.get(userId) || [];
};

// Implement other functions: getTask, updateTask, deleteTask
