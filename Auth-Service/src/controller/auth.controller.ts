import { inject, injectable } from "inversify";
import UserService from "../services/auth.service";
import asyncFunction from "../utils/tryCatch";


@injectable()
export default class UserController {
     private service: UserService
     constructor(@inject('service') service: UserService) {
         this.service= service
     }


     async create(): Promise<Object> {
        return await this.service.create()
     }
}