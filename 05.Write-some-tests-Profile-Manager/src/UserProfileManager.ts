interface UserProfile {
  id: number;
  name: string;
  email: strng;
  age: number;
}

export class UserProfileManager {
  private users: Array<UserProfile> = [];

  constructor(initialUsers?: UserProfile[]) {
    if (initialUsers) {
      this.users = initialUsers;
    }
  }

  addUser(user: UserProfile): void {
    // Ensure there's no user with the same ID before adding
    if (!this.users.find((u) => u.id == user.id)) {
      this.users.push(user);
    }
  }

  removeUser(userId: number): boolean {
    const initialLength = this.users.length;
    this.users = this.users.filter((user) => user.id !== userId);
    return initialLength > this.users.length;
  }

  getUser(userId: number): UserProfile | null {
    return this.user.find((user) => user.id === userId) || null;
  }

  listUsers(): UserProfile[] {
    return this.users;
  }
}

// Testing the UserProfileManager class
const manager = new UserProfileManager();

manager.addUser({
  id: 1,
  name: "Alice",
  email: "alice@email.com",
  age: 28,
});

console.log(manager.listUsers()); // Should print the list containing Alice's profile
