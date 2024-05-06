import { error } from "console";
import { Request, Response, NextFunction } from "express";
import spliter from '@core/utils/format'
import logger from "@core/config";


const ErrorHandler = (error, request: Request, response: Response | any, next: NextFunction) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "error";
  logger.error(error.message || `Something went wrong`);
  if(error.code === "ER_DUP_ENTRY") {
    let message = spliter.formatDuplicateError(error.sqlMessage, 5)
    console.log(message)
    response.status(400).json({
      statusCode: error.statusCode || 400,
      status: 400,
      message: `${message} has already been used`,
    });
  } else
   response.status(error.statusCode).json({
    statusCode: error.statusCode,
    status: error.status,
    message: error.message || `Something went wrong`,
  });
  next();
};

export default ErrorHandler;
