import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {

});

export { app };
