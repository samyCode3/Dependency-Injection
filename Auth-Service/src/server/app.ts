
import "reflect-metadata";
import express, {Application, NextFunction, Request, Response} from 'express'




import IndexRoute from '../routes'
import ErrorHandler from "../middleware/errors.handler";
import CustomError, { NotFoundError } from "../utils/CustomError";
import logger from "../config";

const app:Application = express() 

app.use(express.json())

app.use('/api', IndexRoute)

app.get('/', (request: Request, response: Response) => {
       logger.info(`${request.ip} access url: ${request.protocol}://${request.hostname}${request.path}`)
      return response.status(200).json({
           statusCode: 200,
           status: `success`,
           message: `Api is connected`
       })
})

app.all(`*`, (request: Request, response: Response, next: NextFunction) => {
       const err =  NotFoundError(`The route you are trying to reach (${request.protocol}://${request.hostname}${request.path}) does not exist`)
       next(err)
})

app.use(ErrorHandler)

app.listen(3189, () => console.log(`App runing on port 3000`))