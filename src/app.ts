import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { AppError } from './error/AppError';
import { routes } from './routes';
import http from 'node:http';
import { Server } from 'socket.io';

const app = express();

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
  cors: {
    origin: '*',
  }
});

io.on('connection', (socket) => {
  console.log(`📲 User is connected on socket ${socket.id}`);
});

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

export { serverHttp, io };
