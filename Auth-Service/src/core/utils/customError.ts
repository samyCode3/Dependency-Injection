export default class CustomError extends Error {
  public statusCode: number;
  private status: string;
  private isOperational: boolean;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.status = statusCode >= 400 && statusCode < 500 ? "fail" : "error";
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const NotFoundError = (message: string): CustomError => {
  return new CustomError(message, 404);
};

