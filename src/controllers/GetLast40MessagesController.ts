import { Request, Response } from "express";
import { GetLast40MessagesService } from "../services/GetLast40MessagesService";

class GetLast40MessagesController {
  async handle(request: Request, response: Response) {
    const getLast40MessagesService = new GetLast40MessagesService();

    const messages = await getLast40MessagesService.execute();

    return response.status(200).json(messages);
  }
}

export { GetLast40MessagesController }
