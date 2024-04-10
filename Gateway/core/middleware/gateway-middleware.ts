import { NextFunction, Request, Response } from 'express'
import JWT from 'jsonwebtoken'


const tokens: string[] = ['auth', 'dog-tag']

export const verifyGateWayRequest = (req: Request, res: Response, next: NextFunction):void=> {
      if(req.headers?.gatewayToken)  {

      }
}