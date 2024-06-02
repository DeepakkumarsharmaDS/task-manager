// src/api/users.ts
import express from "express";
import { createUser } from "../services/userService";

const router = express.Router();

router.post("/users", (req, res) => {
  const { username } = req.body;
  const user = createUser(username);
  res.json(user);
});

export default router;
