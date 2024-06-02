import { createUser, getUser } from "../src/services/userService";

test("createUser creates a user", () => {
  const user = createUser("testuser")();
  expect(user.username).toBe("testuser");
});

test("getUser returns a user", () => {
  const user = createUser("testuser")();
  const fetchedUser = getUser(user.id)();
  expect(fetchedUser).toEqual(user);
});
