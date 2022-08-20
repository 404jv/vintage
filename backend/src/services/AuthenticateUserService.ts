import { User } from "@prisma/client";
import { compare } from "bcrypt";
import { prisma } from "../database";
import { AppError } from "../error/AppError";
import jwt from 'jsonwebtoken';

interface IResponse {
  user: User;
  token: string;
}

class AuthenticateUserService {
  async execute(username: string, password: string): Promise<IResponse> {
    const user = await prisma.user.findFirst({ where: { username } });

    if (!user) {
      throw new AppError('Incorrect username/password combination.', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Incorrect username/password combination.', 401);
    }

    const token = jwt.sign({ sub: user.id }, '996359072');

    delete user.password;

    return {
      user,
      token: token,
    };
  }
}

export { AuthenticateUserService };
