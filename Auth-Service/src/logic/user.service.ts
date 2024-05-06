import { inject, injectable } from "inversify";
import { Repository } from "@data/repository/repository";
import { MODULE_TOKENS } from "@core/ioc/token";
import { User } from "./entity/user.entity";
import { RedisProperties } from "@core/config/redis.config";

@injectable()
export class UserService {
  private readonly db = this.repo.createBuilder("users");
  constructor(
    @inject(MODULE_TOKENS.redis) private readonly cache: RedisProperties,
    @inject(MODULE_TOKENS.Repository) private readonly repo: Repository<User>
  ) {}

  public async users(): Promise<User[]> {
    return this.db().select("*");
  }

  public async createUser(input: any): Promise<User> {
    return this.db()
      .insert({ ...input })
      .then(async (result) => {
        const insertedId = result[0];
        let users = await this.db().select("*").where("id", insertedId);
        await this.cache.setKey(
          "user-sub",
          JSON.stringify({
            id: users[0].id,
            phone_number: users[0].phone_number,
            otp: "12345",
          })
        );
        return users;
      })
      .then(([user]) => user);
  }

  public async verifyOtp():Promise<any> {
     const user = await this.cache.getkey('user-sub')
     console.log(JSON.parse(user))
     return user
  }

  public async userById(id: string): Promise<User | any> {
    const user = await this.db().where({ id }).select("*");
    return user;
  }
}
