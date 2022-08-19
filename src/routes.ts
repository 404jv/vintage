import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateUserController } from "./controllers/CreateUserController";
import { SendMessageController } from "./controllers/SendMessageController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const routes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const sendMessageController = new SendMessageController();

routes.post('/users/create', createUserController.handle);
routes.post('/session', authenticateUserController.handle);

routes.post('/messages/create', ensureAuthenticated, sendMessageController.handle);

export { routes };
