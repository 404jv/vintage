class AppError implements Error {
  name: string;
  message: string;
  stack?: string;
  statusCode: number;

  constructor(message: string, statusCode: number = 500) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export { AppError };
