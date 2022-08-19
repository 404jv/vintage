import { Request, Response } from "express";
import { SendMessageService } from "../services/SendMessageService";

class SendMessageController {
  async handle(request: Request, response: Response) {
    const userId = request.userId;
    const { text } = request.body;

    const sendMessageService = new SendMessageService();

    const message = await sendMessageService.execute(text, userId);

    return response.status(201).json(message);
  }
}

export { SendMessageController };
