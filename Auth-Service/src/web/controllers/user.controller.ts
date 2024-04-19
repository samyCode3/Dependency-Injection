import {
  controller,
  httpGet,
  request,
  response,
  params,
  requestParam,
} from "inversify-express-utils";
import { UserService } from "@logic/user.service";
import { inject } from "inversify";
import { SERVICE_MODULE } from "@core/ioc/token";
import { User } from "@logic/entity/user.entity";
import { Repository } from "@data/repository/repository";
import configuration from "@core/config/mysql";
import { Request } from "express";

@controller("/user")
export default class UserController {
  constructor(
    @inject(SERVICE_MODULE.user_service) private readonly service: UserService
  ) {}
  @httpGet("/")
  public async getUser() {
    return this.service.users();
  }
  @httpGet("/:id")
  public async getUserbyId(
    @requestParam("id") id: string,
    @response() res: Response
  ) {
    return this.service.userById(id);
  }
}
