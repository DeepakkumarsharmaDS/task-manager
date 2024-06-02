// src/services/userService.ts
import * as T from "@effect-ts/core/Effect";
import * as E from "@effect-ts/core/Either";
import { pipe } from "@effect-ts/core/Function";
import { User } from "../model/user";
import { users } from "./inMemoryDb";
import { nanoid } from 'nanoid';

export const createUser = (username: string) => T.effectTotal(() => {
  const user: User = { id: nanoid(), username };
  users.set(user.id, user);
  return user;
});

export const getUser = (id: string) => T.effectTotal(() => {
  const user = users.get(id);
  if (!user) throw new Error("User not found");
  return user;
});





