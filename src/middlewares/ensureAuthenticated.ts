import { verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { AppError } from "../error/AppError";

interface IPayload {
  sub: string;
}

async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token is missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, '996359072') as IPayload;

    request.userId = sub;

    return next();
  } catch (error) {
    throw new AppError("Token invalid", 401);
  }
}

export { ensureAuthenticated };
