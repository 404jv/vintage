import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { AppError } from './error/AppError';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  console.error(error);
  return response.sendStatus(500);
});

export { app };
