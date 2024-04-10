import { controller, httpGet } from "inversify-express-utils";
import { UserService } from "@logic/user.service";
import { inject } from "inversify";
import { SERVICE_MODULE } from "@core/ioc/token";
import { User } from "@logic/entity/user.entity";
import { Repository } from "@data/repository/repository";
import configuration from "@core/config/mysql";

@controller("/user")
export default class UserController {
  constructor(@inject(SERVICE_MODULE.user_service) private readonly service: UserService) {}
  @httpGet("/")
  public async getUser() {
     try {
      return  this.service.users();
     } catch (error) {
        console.log(error)
     }
    
  }
}

