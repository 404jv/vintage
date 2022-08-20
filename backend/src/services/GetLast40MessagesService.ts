import { Message } from "@prisma/client";
import { prisma } from "../database";

class GetLast40MessagesService {
  async execute(): Promise<Message[]> {
    const messages = await prisma.message.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 40,
      include: {
        user: {
          select: {
            id: true,
            password: false,
            username: true,
          }
        },
      },
    });

    return messages;
  }
}

export { GetLast40MessagesService };
