import { inject, injectable } from "inversify";
import { Repository } from "@data/repository/repository";
import { MODULE_TOKENS } from "@core/ioc/token";
import { User } from "./entity/user.entity";

@injectable()
export class UserService {
  private readonly db = this.repo.createBuilder('users');
    constructor (@inject(MODULE_TOKENS.Repository) private readonly repo: Repository<User>) {}

    public async users () {
      const user = this.db().select('*')
       return user
    }
}
 