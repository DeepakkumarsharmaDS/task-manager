// src/services/inMemoryDb.ts
import { User } from "../model/user";
import { Task } from "../model/task";

export const users: Map<string, User> = new Map();
export const tasks: Map<string, Task[]> = new Map();
