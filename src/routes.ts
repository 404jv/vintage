import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const routes = Router();

const createUserController = new CreateUserController();

routes.post('/users/create', createUserController.handle);

export { routes };
