
type User = {
  username: string;
  socketId: string;
  id: string;
}

class UsersOnlineInMemory {
  private static users: User[] = [];

  public add(user: User): void {
    const userAlreadyExists = UsersOnlineInMemory.users.find(userOn => userOn.id === user.id);

    if (userAlreadyExists) return;

    UsersOnlineInMemory.users.push(user);
  }

  public remove(socketId: string): void {
    UsersOnlineInMemory.users = UsersOnlineInMemory.users.filter(user => user.socketId !== socketId);
  }

  public getUsers(): User[] {
    return UsersOnlineInMemory.users;
  }
}

export { UsersOnlineInMemory };
