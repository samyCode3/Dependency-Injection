import { error } from "console";
import { Request,  Response, NextFunction} from "express";
import logger from "../config";
const ErrorHandler = (error, request: Request, response: Response, next: NextFunction) => {
    error.statusCode = error.statusCode || 500
    error.status = error.status || 'error'
    logger.error(error.message || `Something went wrong`)
   return response.status(error.statusCode).json({
        statusCode: error.statusCode,
        status: error.status,
        message: error.message || `Something went wrong`
    })
}


export default ErrorHandler