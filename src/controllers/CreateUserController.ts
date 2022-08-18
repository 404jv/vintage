import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { username, password, confirmPassword } = request.body;
  
    const createUserService = new CreateUserService();
    
    const user = await createUserService.execute(username, password, confirmPassword);

    return response.status(201).json(user);
  }
}

export { CreateUserController }
