import {
  controller,
  httpGet,
  request,
  response,
  params,
  requestParam,
  httpPost,
} from "inversify-express-utils";
import { UserService } from "@logic/user.service";
import { inject } from "inversify";
import { SERVICE_MODULE } from "@core/ioc/token";
import { Request } from "express";

@controller("/auth")
export default class UserController {
  constructor(
    @inject(SERVICE_MODULE.user_service) private readonly service: UserService
  ) {}

  @httpPost("/create")
  public async createUser(
    @request() req: Request,
    @response() res: Response
  ) {
     let input = req.body
     return this.service.createUser(input)
  }
  @httpPost("/verify")
  public async verifyUser(

  ) {
     return this.service.verifyOtp()
  }
  @httpGet("/")
  public async getUser() {
    return this.service.users();
  }
  @httpGet("/:id")
  public async getUserbyId(
    @requestParam("id") id: string,
    @response() res: Response
  ) {
    return await this.service.userById(id);
  }

}
