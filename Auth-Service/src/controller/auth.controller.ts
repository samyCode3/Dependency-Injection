import { inject, injectable } from "inversify";
import UserService from "../services/auth.service";
import {  controller,  httpGet  } from "inversify-express-utils";
import  asyncFunction from '../utils/tryCatch'



@controller('/auth')
export default class UserController {
    constructor(private readonly service: UserService) {}

    @httpGet('/')
    async create(): Promise<Object>{
         const user = await this.service.get()
        return user
    }
}