import { controller, httpGet } from "inversify-express-utils"
import { UserService } from "./user.service"

@controller('/user')
export default class UserController {
     constructor(private readonly service: UserService) {}
     @httpGet('/')
     public async getUser () { 
          return this.service.getUser()
     }
}