import { Message } from "@prisma/client";
import { prisma } from "../database";
import { AppError } from "../error/AppError";
import { io } from '../app';

class SendMessageService {
  async execute(text: string, userId: string): Promise<Message> {
    if (!userId) {
      throw new AppError("User not found", 404);
    }

    const userExits = await prisma.user.findFirstOrThrow({ where: { id: userId } });

    if (!userExits) {
      throw new AppError("User not found", 404);
    }

    const message = await prisma.message.create({
      data: {
        text,
        userId
      },
      include: {
        user: true,
      }
    });

    delete message.user.password;

    io.emit('new_message', message);

    return message;
  }
}

export { SendMessageService };
