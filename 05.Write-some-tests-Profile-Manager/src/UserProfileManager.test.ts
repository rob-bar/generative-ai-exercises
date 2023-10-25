import { beforeEach, describe, test, expect } from "bun:test";
import { UserProfileManager } from "./UserProfileManager"; // Update the path accordingly

describe("UserProfileManager", () => {
  let manager: UserProfileManager;

  beforeEach(() => {
    manager = new UserProfileManager();
  });

  test("should add a user profile correctly", () => {
    // Setup
    const user = {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      age: 28,
    };

    // Action
    manager.addUser(user);

    // Assert
    expect(manager.listUsers()).toBe(user);
  });

  // TODO: Test for adding a user with an existing ID

  // TODO: Test for removing a user

  // TODO: Test for fetching a user by ID

  // TODO: Test for listing all users
});
