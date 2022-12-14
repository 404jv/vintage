import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const authenticateUserService = new AuthenticateUserService();

    const userToken = await authenticateUserService.execute(username, password);

    return response.json(userToken);
  }
}

export { AuthenticateUserController };
