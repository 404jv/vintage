import { User } from "@prisma/client";
import { hash } from "bcrypt";
import { prisma } from "../database";
import { AppError } from "../error/AppError";

class CreateUserService {
  async execute(username: string, password: string, confirmPassword: string): Promise<User> {
    if (password !== confirmPassword) {
      throw new AppError('password must be equal to confirm password', 400);
    }

    const userAlreadyExists = await prisma.user.findFirst({
      where: { username }
    });

    if (userAlreadyExists) {
      throw new AppError('username already exists', 400);
    }

    const passwordHash = await hash(password, 8);

    const user = await prisma.user.create({
      data: {
        password: passwordHash,
        username,
      },
    });

    delete user.password;

    return user;
  }
}

export { CreateUserService }
