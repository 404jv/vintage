import { Message } from "@prisma/client";
import { prisma } from "../database";
import { AppError } from "../error/AppError";

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
      }
    });

    return message;
  }
}

export { SendMessageService };
