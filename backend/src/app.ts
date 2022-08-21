import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { AppError } from './error/AppError';
import { routes } from './routes';
import http from 'node:http';
import { Server } from 'socket.io';
import cors from 'cors';
import { UsersOnlineInMemory } from './database/UsersOnlineInMemory';

const app = express();
app.use(cors());

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
  cors: {
    origin: '*',
  }
});

const usersOnlineInMemory = new UsersOnlineInMemory();

io.on('connection', (socket) => {
  socket.on('connection', (user: any) => {
    Object.assign(user, {
      socketId: socket.id,
    });

    usersOnlineInMemory.add(user);

    io.emit('new_user_online', user);
  });

  socket.on('disconnect', () => {
    usersOnlineInMemory.remove(socket.id);
  });
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
