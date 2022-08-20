import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetLast40MessagesController } from "./controllers/GetLast40MessagesController";
import { SendMessageController } from "./controllers/SendMessageController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const routes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const sendMessageController = new SendMessageController();
const getLast40MessagesController = new GetLast40MessagesController();

routes.post('/users/create', createUserController.handle);
routes.post('/session', authenticateUserController.handle);

routes.post('/messages/create', ensureAuthenticated, sendMessageController.handle);
routes.get('/messages', ensureAuthenticated, getLast40MessagesController.handle);

export { routes };
