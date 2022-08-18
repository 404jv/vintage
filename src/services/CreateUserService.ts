import { User } from "@prisma/client";
import { prisma } from "../database";

class CreateUserService {
  async execute(username: string, password: string, confirmPassword: string): Promise<User> {
    if (password !== confirmPassword) {
      throw new Error('password must be equal to confirm password');
    }

    const userAlreadyExists = await prisma.user.findFirst({
      where: { username }
    });

    if (userAlreadyExists) {
      throw new Error('username already exists');
    }

    const user = await prisma.user.create({
      data: {
        password,
        username,
      }
    });

    return user;
  }
}

export { CreateUserService }
