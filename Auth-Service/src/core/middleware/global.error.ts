import { error } from "console";
import { Request, Response, NextFunction } from "express";
import logger from "@core/config";
import asyncFunction from "@core/utils/tryCatch";
import { BaseMiddleware } from "@web/lib/base-middleware";

const ErrorHandler = (error, request: Request, response: Response | any, next: NextFunction) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "error";
  logger.error(error.message || `Something went wrong`);
   response.status(error.statusCode).json({
    statusCode: error.statusCode,
    status: error.status,
    message: error.message || `Something went wrong`,
  });
  next();
};

export default ErrorHandler;
